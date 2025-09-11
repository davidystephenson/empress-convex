import rangeContext from './rangeContext'
import RangeFinalIcon from './RangeFinalIcon'
import RangeDetails from './RangeDetails'
import { PopoverButtonRobe } from 'robes'
import { HStack, Text } from '@chakra-ui/react'

export default function RangeConsumer () {
  const range = rangeContext.use()
  const ranged = range.maximum !== range.minimum
  const maximumLabel = ranged && `-${range.maximum}`
  const label = (
    <HStack alignItems='baseline'>
      <Text>{range.minimum}{maximumLabel}</Text>
      <RangeFinalIcon />
    </HStack>
  )
  return (
    <PopoverButtonRobe size='xs' label={label}>
      <RangeDetails />
    </PopoverButtonRobe>
  )
}
