import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

import { theme } from '../../utils/styles/theme'
import { WithChildren } from '../../types'

export const AppContainer: React.FC<WithChildren> = ({ children }) => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </NativeBaseProvider>
  )
}
