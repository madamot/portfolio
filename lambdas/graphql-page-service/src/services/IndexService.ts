import { PageService, IPagesService } from './PageService.js'

export interface IIndexService {
  pageService: IPagesService
}

export class IndexService implements IIndexService {
  // Public declarations
  public readonly pageService: IPagesService

  constructor() {
    // Private Services

    // Public Services
    this.pageService = new PageService()
  }
}
