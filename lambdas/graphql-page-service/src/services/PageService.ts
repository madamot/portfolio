export interface IPagesService {
  all(
    pageLength: number | undefined,
    pageNumber: number | undefined,
    filter: FormFilter
  ): Promise<PaginatedResults<Form>>
}

export class PageService implements IPagesService {
  // Public declarations
  public readonly pageService: IPagesService

  constructor() {}

  async all(
    pageLength: number | undefined,
    pageNumber: number | undefined,
    filter: FormFilter
  ): Promise<PaginatedResults<Form>> {
    throw new Error('Method not implemented.')
  }
}
