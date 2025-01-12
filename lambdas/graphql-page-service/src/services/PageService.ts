import { ORM } from '@madamot/madamot-dynamo-database'
import { Index, IndexType } from '../types/graphql.js'
import { Index as IndexTable } from '../types/tables.js'

export interface IPagesService {
  all(argument: string): Promise<Index[]>
}

export class PageService implements IPagesService {
  // Public declarations

  constructor(private readonly indexTable: Readonly<ORM<IndexTable>>) {}

  async all(argument: string): Promise<Index[]> {
    const searchResult = this.indexTable.findMany({
      key: IndexType.Page,
      where: argument,
    }) as unknown as Index[]
    return searchResult
  }
}
