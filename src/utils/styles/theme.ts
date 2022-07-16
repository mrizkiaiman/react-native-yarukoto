import { extendTheme } from 'native-base'

export const theme = extendTheme({
  fontConfig: {
    Oxanium: {
      200: {
        normal: 'Oxanium_200ExtraLight',
      },
      300: {
        normal: 'Oxanium_300Light',
      },
      400: {
        normal: 'Oxanium_400Regular',
      },
      500: {
        normal: 'Oxanium_500Medium',
      },
      600: {
        normal: 'Oxanium_600SemiBold',
      },
      700: {
        normal: 'Oxanium_700Bold',
      },
      800: {
        normal: 'Oxanium_800ExtraBold',
      },
    },
  },
  fonts: {
    heading: 'Oxanium',
    body: 'Oxanium',
    mono: 'Oxanium',
  },
})
