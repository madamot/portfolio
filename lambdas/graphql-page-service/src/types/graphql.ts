export enum IndexType {
  Page = 'PAGE',
}

export type Index = {
  type: IndexType
  name: String
  searchName: String
  url: String
  keywords?: String
  updatedAt: Date
  createdAt: Date
}
