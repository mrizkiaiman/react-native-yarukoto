import { StyleSheet, View } from 'react-native'
import { useLoadFonts } from './src/utils/hooks/useLoadFonts'
import { AppContainer } from './src/components/containers/AppContainer'

import { AppNavigator } from './src/navigation/app-navigator'

export default function App() {
  const fontsIsLoaded = useLoadFonts()
  if (!fontsIsLoaded) return null

  return (
    <AppContainer>
      <AppNavigator />
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
