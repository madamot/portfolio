import React from 'react'
import icons from './icons'

import { IconsType } from './icons'

import './icons.css'

interface IconProps {
  type: keyof IconsType
  size?: 'small' | 'medium' | 'large'
  color?: string
}

const Icon: React.FC<IconProps> = ({ type, size = 'medium', color = '#000' }) => {
  return icons[type]
    ? React.createElement(icons[type], {
        className: `icon icon-${type} icon--${size}`.trim(),
        style: { fill: color },
      })
    : null
}

export default Icon
