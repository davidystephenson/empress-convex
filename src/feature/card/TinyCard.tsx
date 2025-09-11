import { Card, CardBody, type CardProps } from '@chakra-ui/react'
import type { JSX } from 'react'
import TinyCardCenter from './TinyCardCenter'

export default function TinyCard (props: {
  children?: React.ReactNode
} & CardProps): JSX.Element {
  const { children, ...rest } = props
  return (
    <Card
      borderRadius='4px'
      w='fit-content'
      {...rest}
      height='40px'
    >
      <CardBody w='fit-content' p='0'>
        <TinyCardCenter>
          {children}
        </TinyCardCenter>
      </CardBody>
    </Card>
  )
}