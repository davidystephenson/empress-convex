import contextCreator from 'context-creator'
import type { Doc } from '../../convex/_generated/dataModel'

const authContext = contextCreator({
  name: 'Auth',
  useValue: (props: { user: Doc<'users'> }) => props.user
})
export default authContext
