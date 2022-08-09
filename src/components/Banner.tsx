import * as React from 'react'
import { Image, Center, Text, IconButton } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { HomeProps } from '../navigation/types'

interface BannerProps {
  image: React.ReactNode
  bg?: string
}

export const Banner: React.FC<BannerProps> = ({ image, bg = 'cyan.900' }) => {
  const navigation = useNavigation<DrawerNavigationProp<HomeProps>>()
  const openDrawer = () => {
    navigation.openDrawer()
  }
  return (
    <Center bg={bg} width={'100%'} w={'full'} h={'280px'}>
      <IconButton
        position={'absolute'}
        onPress={openDrawer}
        style={{
          top: 26,
          left: 12,
          zIndex: 1,
        }}
        _icon={{
          as: Ionicons,
          name: 'ios-menu',
          size: 8,
          color: 'white',
        }}
      />
      {image}
      <Text
        position={'absolute'}
        fontSize={12}
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
