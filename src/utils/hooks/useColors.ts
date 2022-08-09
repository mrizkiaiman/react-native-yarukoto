import { useColorModeValue } from 'native-base'

export const useColors = () => {
  const textColors = useColorModeValue('muted.900', 'white')
  const containerColors = useColorModeValue('orange.50', 'muted.900')
  const navigatorColors = useColorModeValue('cyan.900', 'white')
  const defaultColors = useColorModeValue('white', 'coolGray.800')
  const plusButton = useColorModeValue('coolGray.800', 'coolGray.800')

  return { textColors, containerColors, navigatorColors, defaultColors, plusButton }
}
