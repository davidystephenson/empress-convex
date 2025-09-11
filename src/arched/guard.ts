import { ConvexError, type GenericId } from 'convex/values'
import type { Ctx } from './archedTypes'
import type { DocumentByName, TableNamesInDataModel } from 'convex/server'
import type { DataModel } from '../../convex/_generated/dataModel'

export default async function guard<
TableName extends TableNamesInDataModel<DataModel>
> (props: {
  ctx: Ctx
  id: GenericId<TableName>
}): Promise<DocumentByName<DataModel, TableName>> {
  const doc = await props.ctx.db.get(props.id)
  if (doc == null) {
    throw new ConvexError({ id: props.id, notFound: true })
  }
  return doc
}
