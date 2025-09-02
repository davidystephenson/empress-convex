import { useQuery } from 'convex/react'
import type { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import type { ArchedResult } from './archedTypes'

export function useArchedQuery<
  Data,
  Args extends DefaultFunctionArgs,
  Query extends FunctionReference<
  'query', 'public', Args, Data
  >
> (props: {
  args: Query['_args']
  query: Query
}): ArchedResult<Query['_returnType']> {
  const data = useQuery(props.query, props.args as any)
  const loading = data === undefined
  if (loading) {
    return { data: undefined, loading }
  }
  return { data, loading: false }
}