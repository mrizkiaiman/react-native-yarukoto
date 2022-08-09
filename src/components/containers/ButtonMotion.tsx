import * as React from 'react'
import { View } from 'moti'
import { WithChildren } from '../../types'

export const ButtonMotion: React.FC<WithChildren> = ({ children }) => {
  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
      }}>
      {children}
    </View>
  )
}
