import * as React from 'react'

export interface SpacerProps {
  size: keyof typeof spacerSizes
}

const spacerSizes = {
  smallest: 'h-6 h-12',
  smaller: 'h-12 h-24',
  small: 'h-18 h-36',
  medium: 'h-24 lg:h-48',
  large: 'h-32 lg:h-64',
}

function Spacer({size}: SpacerProps) {
  return <div className={spacerSizes[size]} />
}

export {Spacer}
