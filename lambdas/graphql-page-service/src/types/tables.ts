export enum IndexType {
  Page = 'PAGE',
}

export type Index = {
  type: IndexType
  name: string
  searchName: string
  url: string
  keywords?: string
  updatedAt: Date
  createdAt: Date
}
