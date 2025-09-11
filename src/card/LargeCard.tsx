import { Card, CardBody, type CardProps } from '@chakra-ui/react'
import type { JSX } from 'react'
import { SCHEME_RATIO } from './cardConstants'

export default function LargeCard (props: {
  children?: React.ReactNode
} & CardProps): JSX.Element {
  const { children, ...rest } = props
  return (
    <Card h='500px' sx={{ aspectRatio: SCHEME_RATIO }} {...rest}>
      <CardBody padding='10px'>
        {children}
      </CardBody>
    </Card>
  )
}
