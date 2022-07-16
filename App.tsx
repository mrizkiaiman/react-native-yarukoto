import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Text } from 'native-base'

import { NativeBaseProvider } from 'native-base'
import { useLoadFonts } from './src/utils/hooks/useLoadFonts'
import { theme } from './src/utils/styles/theme'

import { Home } from './src/screens/home'

export default function App() {
  const fontsIsLoaded = useLoadFonts()
  if (!fontsIsLoaded) return null

  return (
    <NativeBaseProvider theme={theme}>
      <Home />
    </NativeBaseProvider>
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
