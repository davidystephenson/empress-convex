import { Heading, HStack } from '@chakra-ui/react'
import LayoutAuth from './LayoutAuth'
import ClinkRobe from 'clink-robe'
import type { ReactNode } from 'react'

export default function LayoutHeader (props: {
  children?: ReactNode
  loading?: boolean
}) {
  return (
    <HStack justifyContent='space-between'>
      <ClinkRobe to='/games'>
        <Heading size='md'>Long Live the Empress</Heading>
      </ClinkRobe>
      {props.children}
      <LayoutAuth loading={props.loading} />
    </HStack>
  )
}
