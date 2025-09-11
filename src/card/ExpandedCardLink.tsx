import { HStack, Text, type TextProps } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CardLinkIcon from './CardLinkIcon'
import type { JSX } from 'react'

export default function ExpandedCardLink (props: {
  icon: string
  label: string
  link: string
} & TextProps): JSX.Element {
  const {
    icon,
    label,
    link,
    ...rest
  } = props
  return (
    <Link to={link} target='_blank' onClick={(event) => event.stopPropagation()}>
      <HStack spacing='3px'>
        <CardLinkIcon src={icon} />
        <Text fontSize='xs' {...rest}>{label}</Text>
      </HStack>
    </Link>
  )
}
