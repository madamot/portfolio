export const SIDEBAR_FRAGMENT = `
    fragment Sidebar on SidebarRecord {
        id
        sticky
        content {
            ...Text
            ...ButtonGroup
        }
    }
`
