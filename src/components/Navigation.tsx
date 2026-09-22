import React from 'react'
import { CircleItem } from './CircleItem'

type Section = {
    activeSection: 'code' | 'motion' | 'photo'
    setactiveSection: (section: 'code' | 'motion' | 'photo') => void 
}

export const Navigation = ({activeSection, setactiveSection}: Section) => {
  return (
    <div>
        <CircleItem label="фото" />
        <CircleItem label="прога" />
        <CircleItem label="дизайн" />
    </div>
  )
}
