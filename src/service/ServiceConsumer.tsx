import { HStack, Stack } from '@chakra-ui/react'
import ServicePalace from './ServicePalace'
import ServiceTrial from './ServiceTrial.tsx'
import ServiceDungeon from './ServiceDungeon.tsx'
import type { JSX } from 'react'

export default function ServiceConsumer (): JSX.Element {
  return (
    <Stack>
      <HStack justifyContent='space-between'>
        <ServicePalace />
        <ServiceTrial />
        <ServiceDungeon />
      </HStack>
    </Stack>
  )
}
