import { HeaderRecord, SidebarRecord } from '../generated/graphql'
import { CacheComponent } from '../types/components'

export const renderTestComponent = <T extends CacheComponent | SidebarRecord | HeaderRecord>(
  component: (data: T) => string,
  data: T
) => {
  document.body.innerHTML = component(data)
}
