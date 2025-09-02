import type { QueryCtx, MutationCtx } from "../../../convex/_generated/server"

export interface ArchedLoading {
  data: undefined
  loading: true
}

export interface ArchedLoaded<T> {
  data: T
  loading: false
}

export type ArchedResult<T> = ArchedLoading | ArchedLoaded<T>

export type Ctx = QueryCtx | MutationCtx