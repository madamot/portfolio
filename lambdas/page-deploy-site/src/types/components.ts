import { BannerBuildData } from '../components/banner/banner'
import { ButtonGroupBuildData } from '../components/button_group/button_group'
import { CardStyleRecord } from '../components/card/card'
import { PromoCardsBuildData } from '../components/promo_card/promo_card'

import {
  CardRecord,
  HomepageRecord,
  ProjectModelContentField,
  ProjectRecord,
} from '../generated/graphql'

export type Page = ProjectRecord | HomepageRecord

export type CacheComponent = ProjectModelContentField | CardRecord | CardStyleRecord
export type CacheComponents = CacheComponent[]

export type BuildComponent =
  | ProjectModelContentField
  | CardRecord
  | BannerBuildData
  | ButtonGroupBuildData
  | PromoCardsBuildData

export type Env = 'stage' | 'live'
