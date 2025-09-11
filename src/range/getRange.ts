import type { PendingChoice } from '@davidystephenson/cardservice'
import type { Range } from './rangeTypes'

export default function getTimelineRange ({ pendingChoices: choices, final, phase, palaceLength: timelineLength }: {
  pendingChoices: PendingChoice[]
  final: boolean
  phase: string
  palaceLength: number
}): Range {
  if (final) return { minimum: 0, maximum: 0 }
  if (phase === 'play' && choices.length === 0) {
    const minimumRange = getTimelineRange({
      palaceLength: timelineLength - 1,
      phase: 'auction',
      final: false,
      pendingChoices: choices
    })
    const maximumRange = getTimelineRange({
      palaceLength: timelineLength,
      phase: 'auction',
      final: false,
      pendingChoices: choices
    })
    return {
      minimum: minimumRange.minimum,
      maximum: maximumRange.maximum
    }
  } else {
    if (timelineLength <= 1) {
      return { minimum: 1, maximum: 1 }
    } else if (timelineLength === 2) {
      return { minimum: 2, maximum: 2 }
    } else if (timelineLength === 3) {
      return { minimum: 2, maximum: 3 }
    } else if (timelineLength === 4) {
      return { minimum: 3, maximum: 4 }
    } else {
      return {
        minimum: Math.ceil(timelineLength / 2) + 1,
        maximum: timelineLength
      }
    }
  }
}
