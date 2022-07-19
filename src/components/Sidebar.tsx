import * as React from 'react'
import { VStack, HStack, useColorMode, Text, IconButton, Image, Switch, Box } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { MenuButton } from './MenuButton'

import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { useColors } from '../utils/hooks/useColors'

export const Sidebar: React.FC<DrawerContentComponentProps> = props => {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  const { navigatorColors, sidebarColors } = useColors()
  const { colorMode, toggleColorMode } = useColorMode()

  const navigateToHome = () => {
    navigation.navigate('HOME')
  }
  const navigateToAbout = () => {
    navigation.navigate('ABOUT')
  }
  const closeDrawer = () => {
    navigation.closeDrawer()
  }

  return (
    <VStack bg={sidebarColors} height={'100%'} pt={'100px'} paddingX={'24px'}>
      <IconButton
        onPress={closeDrawer}
        position={'absolute'}
        style={{
          top: 48,
          right: 24,
          borderRadius: 100,
        }}
        _icon={{
          as: Ionicons,
          name: 'chevron-back-circle-sharp',
          size: 12,
          color: navigatorColors,
        }}
      />
      <Image
        source={require('../assets/avatar.png')}
        alt="mrizkiaiman"
        height={140}
        width={140}
        borderRadius={100}
        borderWidth={1}
        borderColor={'muted.200'}
        mt={'48px'}
      />
      <Text fontWeight={'extrabold'} fontSize={28} mt={'12px'} letterSpacing={-2}>
        M. Rizki Aiman
      </Text>
      <Box my={'24px'}>
        <MenuButton active={currentRoute === 'Main'} onPress={navigateToHome} icon="inbox">
          Tasks
        </MenuButton>
        <MenuButton active={currentRoute === 'About'} onPress={navigateToAbout} icon="info">
          About
        </MenuButton>
      </Box>
      <HStack space={2} alignItems="center" mt={'90%'} alignSelf="center">
        <Text fontSize={16} fontWeight={'bold'}>
          Dark
        </Text>
        <Switch isChecked={colorMode === 'light'} onToggle={toggleColorMode} size="lg"></Switch>
        <Text fontSize={16} fontWeight={'bold'} mr={'12px'}>
          Light
        </Text>
      </HStack>
    </VStack>
  )
}
