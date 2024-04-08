import { CardRecord, ProjectModelContentField } from '../generated/graphql'

export type Component = ProjectModelContentField | CardRecord

export type Components = Component[]
