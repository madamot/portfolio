import { BannerBuildData } from '../components/banner/banner'
import { ButtonGroupBuildData } from '../components/button_group/button_group'
import { CardBuildData } from '../components/card/card'
import { PromoCardsBuildData } from '../components/promo_card/promo_card'

import {
  CardRecord,
  HomepageRecord,
  ProjectModelContentField,
  ProjectRecord,
} from '../generated/graphql'

export type Page = ProjectRecord | HomepageRecord

export type CacheComponent = ProjectModelContentField | CardRecord
export type CacheComponents = CacheComponent[]

export type BuildComponent =
  | ProjectModelContentField
  | CardBuildData
  | BannerBuildData
  | ButtonGroupBuildData
  | PromoCardsBuildData

export type Env = 'stage' | 'live'
