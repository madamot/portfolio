import { loadComponent, loadComponents, renderTemplate } from '../../utils/generator'

export const render = async (data: any, isPreview: boolean) => {
  data.isPreview = isPreview
  data.renderedNavbar = loadComponent('navigation').render(data.project?.navigation)

  if (data?.project?.sidebarLeft) {
    data.renderedSidebarLeft = loadComponent('sidebar').render(data.project.sidebarLeft)
  }

  if (data?.project?.sidebarRight) {
    data.renderedSidebarRight = loadComponent('sidebar').render(data.project.sidebarRight)
  }

  if (data?.project?.header) {
    data.renderedHeader = loadComponent('header').render(data.project.header)
  }

  data.renderedComponents = loadComponents(data.project.content)

  return renderTemplate(data)
}
