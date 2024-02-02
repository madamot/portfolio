import {
  BILLBOARD_FRAGMENT,
  BUTTONGROUP_FRAGMENT,
  TEXT_FRAGMENT,
  PROMOCARD_FRAGMENT,
  IMAGE_FRAGMENT,
} from '../fragments'

export const SIDEBAR_FRAGMENT = `
    ${BILLBOARD_FRAGMENT}
    ${BUTTONGROUP_FRAGMENT}
    ${TEXT_FRAGMENT}
    ${PROMOCARD_FRAGMENT}
    ${IMAGE_FRAGMENT}

    fragment Sidebar on ProjectModelSidebarField {
        ...ButtonGroup
        ...Text
    }
`
