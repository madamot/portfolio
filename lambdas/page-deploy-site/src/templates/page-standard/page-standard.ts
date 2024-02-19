import { loadComponent, loadComponents, renderTemplate } from '../../utils/generator'

export const render = async (data: any, isPreview: boolean) => {
  data.isPreview = isPreview
  data.renderedNavbar = loadComponent('navigation').render(data.project?.navigation)

  if (data?.project?.sidebar) {
    data.renderedSidebar = loadComponent('sidebar').render(data.project.sidebar)
  }

  if (data?.project?.sidebarRight) {
    data.renderedSidebarRight = loadComponent('sidebar').render(data.project.sidebarRight)
  }
  data.renderedComponents = loadComponents(data.project.content)

  return renderTemplate(data)
}
