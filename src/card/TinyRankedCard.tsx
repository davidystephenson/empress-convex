import {
  type CardProps,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import type { JSX } from 'react'
import TinyCard from './TinyCard'
import CardIcon from './CardIcon'
import getCardBackground from './getCardBackground'
import ExpandedCard from './ExpandedCard'

export default function TinyRankedCard(props: {
  children?: React.ReactNode
  rank: number
} & CardProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { rank, ...rest } = props
  const bg = getCardBackground({ rank })
  console.log('bg', bg)
  return (
    <>
      <TinyCard
        bg={bg}
        onClick={onOpen}
        {...rest}
      >
        <VStack spacing='1px' pb='1px'>
          <Heading size='xs' fontSize='xs'>{rank}</Heading>
          <CardIcon rank={rank} />
        </VStack>
      </TinyCard>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent width='auto' onClick={onClose}>
          <ExpandedCard rank={rank} />
        </ModalContent>
      </Modal>
    </>
  )
}