/// <reference types="vite-plugin-svgr/client" />
import { FunctionComponent, SVGAttributes } from 'react'
import Search from './search.svg?react'

export type IconsType = {
  Search: FunctionComponent<SVGAttributes<SVGElement>>
}

const icons: IconsType = {
  Search: Search,
}

export { icons as default }
