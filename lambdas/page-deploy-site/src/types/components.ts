import {
  CardRecord,
  HomepageRecord,
  ProjectModelContentField,
  ProjectRecord,
} from '../generated/graphql'

export type Page = ProjectRecord | HomepageRecord

export type Component = ProjectModelContentField | CardRecord

export type Components = Component[]

export type Env = 'stage' | 'live'
