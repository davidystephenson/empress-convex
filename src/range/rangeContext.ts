import contextCreator from 'context-creator'
import getRange from './getRange'
import serviceContext from '../service/serviceContext'

const rangeContext = contextCreator({
  name: 'Range',
  useValue: () => {
    const service = serviceContext.use()
    const range = getRange({
      ...service.game,
      palaceLength: service.game.center.length
    })
    return range
  }
})
export default rangeContext
