import type { JSX } from 'react'
import RangeConsumer from './RangeConsumer'
import rangeContext from './rangeContext'

export default function RangeController (): JSX.Element {
  return (
    <rangeContext.Provider>
      <RangeConsumer />
    </rangeContext.Provider>
  )
}
