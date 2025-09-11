import { Center, type CenterProps } from "@chakra-ui/react"
import type { JSX, ReactNode } from "react"

export default function TinyCardCenter (props: {
  children?: ReactNode
} & CenterProps): JSX.Element {
  const { children, ...rest } = props
  return (
    <Center p='2px' minH='24px' h='100%' {...rest}>
      {children}
    </Center>
  )
}