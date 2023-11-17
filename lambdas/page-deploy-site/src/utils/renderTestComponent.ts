export const renderTestComponent = (component: { render: (arg0: any) => string }, data: any) => {
  document.body.innerHTML = component.render(data)
}
