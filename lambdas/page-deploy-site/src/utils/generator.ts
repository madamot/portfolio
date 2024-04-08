import { HomepageRecord, ProjectRecord } from '../generated/graphql'
import { Component, Components } from '../types/components'

const fs = require('fs')
const path = require('path')
const Mustache = require('mustache')

const templatesFolder = path.join(__dirname, '..', 'templates')
const componentsFolder = path.join(__dirname, '..', 'components')

export const render = async (
  data: ProjectRecord | HomepageRecord,
  isPreview: boolean
): Promise<File> => {
  return loadTemplate('page-standard').render(data, isPreview)
}

const loadTemplate = (template: string) => {
  return require(path.join(templatesFolder, template, template))
}

export const loadComponent = (template: string) => {
  try {
    return require(path.join(componentsFolder, template, template))
  } catch (error) {
    console.log('loadComponent error', error)
  }
}

export const loadComponents = (components: Components) => {
  return components
    .map(component => loadComponent(component._modelApiKey)?.render(component))
    .join('')
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

export const renderComponent = <T extends Component>(data: T): string => {
  return Mustache.render(openComponent(data._modelApiKey), data)
}

const isFolder = (dirPath: string, file: any) => {
  return fs.statSync(path.join(dirPath, file)).isDirectory()
}

const getCssFiles = (dirPath: string) => {
  return fs.readdirSync(dirPath).reduce((accumulatedFiles: string | any[], currentFile: any) => {
    if (isFolder(dirPath, currentFile)) {
      return accumulatedFiles.concat(getCssFiles(path.join(dirPath, currentFile)))
    } else {
      return accumulatedFiles.concat(path.join(dirPath, currentFile))
    }
  }, [])
}

export const generateMasterCSSFile = () => {
  const templateStyles = getCssFiles(templatesFolder)
    .filter((filePath: string) => filePath.slice(-3) == 'css')
    .map((filePath: string) => fs.readFileSync(filePath, 'UTF-8'))
    .join('')

  const componentStyles = getCssFiles(componentsFolder)
    .filter((filePath: string) => filePath.slice(-3) == 'css')
    .map((filePath: string) => fs.readFileSync(filePath, 'UTF-8'))
    .join('')

  return [...templateStyles, ...componentStyles].join('')
}
