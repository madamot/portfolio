const fs = require('fs')
const path = require('path')
const Mustache = require('mustache')

const templatesFolder = path.join(__dirname, '..', 'templates')
const componentsFolder = path.join(__dirname, '..', 'components')

export const render = async (data: any) => {
  return loadTemplate('page-standard').render(data)
}

const loadTemplate = (template: string) => {
  return require(path.join(templatesFolder, template, template + '.js'))
}

export const loadComponent = (template: string) => {
  return require(path.join(componentsFolder, template, template + '.js'))
}

const openTemplate = (template: string) => {
  return fs.readFileSync(path.join(templatesFolder, template, template + '.html'), 'UTF-8')
}

const openComponent = (template: string) => {
  return fs.readFileSync(path.join(componentsFolder, template, template + '.html'), 'UTF-8')
}

export const renderTemplate = (data: any) => {
  return Mustache.render(openTemplate('page-standard'), data)
}

export const renderComponent = (data: any) => {
  return Mustache.render(openComponent('nav'), data)
}
