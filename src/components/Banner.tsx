import * as React from 'react'
import { Image, Center, Text, IconButton } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { HomeProps } from '../navigation/types'

export const Banner = () => {
  const navigation = useNavigation<DrawerNavigationProp<HomeProps>>()
  const openDrawer = () => {
    navigation.openDrawer()
  }
  return (
    <Center bg={'cyan.900'} height={'35%'} width={'100%'}>
      <IconButton
        position={'absolute'}
        onPress={openDrawer}
        style={{
          top: 32,
          left: 12,
        }}
        _icon={{
          as: Ionicons,
          name: 'ios-menu',
          size: 8,
          color: 'white',
        }}
      />
      <Image
        alt="banner-image"
        source={require('../assets/banner.png')}
        style={{ height: 310, width: 310, resizeMode: 'contain' }}
      />
      <Text
        position={'absolute'}
        fontSize={11}
        fontWeight={'extrabold'}
        color={'white'}
        pr={12}
        pb={8}
        alignSelf="flex-end">
        mrizkiaiman
      </Text>
    </Center>
  )
}
