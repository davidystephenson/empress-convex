import { Badge, Heading, HStack } from "@chakra-ui/react"
import { ButtonClinkRobe } from "clink-robe"
import LayoutHeader from "./LayoutHeader"

export default function LayoutNotFound(props: {
  id?: string
  label: string
}) {
  const badge = props.id && <Badge>{props.id}</Badge>
  return (
    <>
      <LayoutHeader />
      <HStack>
        <Heading size='sm'>{props.label} not found</Heading>
        {badge}
      </HStack>

      <ButtonClinkRobe to="/games">Games</ButtonClinkRobe>
    </>
  )
}