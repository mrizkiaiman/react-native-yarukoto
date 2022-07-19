import { useColorModeValue } from 'native-base'

export const useColors = () => {
  const textColors = useColorModeValue('muted.900', 'white')
  const containerColors = useColorModeValue('white', 'muted.900')
  const navigatorColors = useColorModeValue('cyan.900', 'white')
  const sidebarColors = useColorModeValue('amber.50', 'coolGray.800')

  return { textColors, containerColors, navigatorColors, sidebarColors }
}
