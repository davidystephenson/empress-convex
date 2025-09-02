import { Heading, HStack } from "@chakra-ui/react";
import LayoutAuth from "./LayoutAuth";

export default function LayoutHeader(props: {
  loading?: boolean
  name?: string
}) {
  return (
    <HStack justifyContent='space-between'>
      <Heading size='md'>Long Live the Empress</Heading>
      <LayoutAuth loading={props.loading} name={props.name }/>
    </HStack>
  )
}