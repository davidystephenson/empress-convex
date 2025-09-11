import { Box, Stack, HStack, Circle, Heading, Flex, Text, VStack, Icon, Center } from '@chakra-ui/react'
import type { JSX } from 'react'
import getCardBackground from './getCardBackground'
import { TbEyeFilled } from 'react-icons/tb'
import CardIcon from './CardIcon'
import ExpandedCardLink from './ExpandedCardLink'
import LargeCard from './LargeCard'
import guardCard from './guardCard'

export default function ExpandedCard(props: {
  rank?: number
}): JSX.Element {
  if (props.rank == null) {
    return <Text>Empty</Text>
  }
  const card = guardCard({ rank: props.rank })
  const cardBg = getCardBackground({ rank: props.rank, weight: 700 })
  const eyes = Array.from({ length: card.time }, (_, index) => {
    return <Icon as={TbEyeFilled} key={index} boxSize='32px' />
  })
  const circleBg = card.color === 'Red' ? 'black' : 'white'
  const rankColor = card.color === 'Red' ? 'white' : 'black'
  const bonusProps = card.bonus !== '' ? { color: circleBg, padding: '11px', bg: 'white' } : {}
  const bonus = card.bonus && (
    <Box
      {...bonusProps}
      dangerouslySetInnerHTML={{ __html: card.bonus }}
      maxH='114px'
    />
  )
  const linkProps = card.rank === 25 ? { fontSize: '10px' } : {}
  return (
    <LargeCard bg={cardBg}>
      <Stack height='100%'>
        <Heading size='xl'>
          {card.title}
        </Heading>
        <HStack alignItems='start' justifyContent='space-between' width='100%'>
          <VStack spacing='0'>
            <Circle size='50px' bg={circleBg} color={rankColor} pb='5px' mb='4px'>
              <Heading size='lg'>
                {card.rank}
              </Heading>
            </Circle>
            {eyes}
          </VStack>
          <Center width='100%'>
            <CardIcon rank={card.rank} boxSize='145px' />
          </Center>
        </HStack>
        <Flex direction='column' height='100%' gap='10px' justifyContent='space-between'>
          <Text minHeight='60px' dangerouslySetInnerHTML={{ __html: card.beginning }} />
          <Text dangerouslySetInnerHTML={{ __html: card.end }} />
          {bonus}
          <HStack spacing='10px'>
            <ExpandedCardLink label={card.label1} link={card.link1} icon={card.icon1} {...linkProps} />
            <ExpandedCardLink label={card.label2} link={card.link2} icon={card.icon2} {...linkProps} />
          </HStack>
        </Flex>
      </Stack>
    </LargeCard>
  )
}
