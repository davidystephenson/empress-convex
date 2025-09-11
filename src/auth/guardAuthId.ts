import { getAuthUserId } from '@convex-dev/auth/server'
import type { Id } from '../../convex/_generated/dataModel'
import type { Ctx } from '../arched/archedTypes'

export default async function guardAuthId (props: {
  ctx: Ctx
}): Promise<Id<'users'>> {
  const userId = await getAuthUserId(props.ctx)
  if (userId == null) {
    throw new Error('Unauthenticated')
  }
  return userId
}
