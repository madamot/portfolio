import { ORM } from '@madamot/madamot-dynamo-database'
import { PageService, IPagesService } from './PageService.js'
import { Index as IndexTable } from '../types/tables.js'

export interface IIndexService {
  pageService: IPagesService
}

export class IndexService implements IIndexService {
  // Public declarations
  public readonly pageService: IPagesService

  constructor(table: Readonly<ORM<IndexTable>>) {
    // Private Services

    // Public Services
    this.pageService = new PageService(table)
  }
}
