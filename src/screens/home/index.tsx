import React from 'react'
import { View, Image } from 'react-native'

import { Container, Text, Center, Box, VStack } from 'native-base'
// import BannerImage from '../../assets/banner.svg'

export const Home = () => {
  return (
    <Center>
      <Center bg={'cyan.900'} height={'35%'} width={'100%'}>
        <Image source={require('../../assets/banner.png')} style={{ height: 310, width: 310, resizeMode: 'contain' }} />
        <Text
          position={'absolute'}
          fontSize={11}
          fontWeight={'extrabold'}
          color="white"
          pl={8}
          pt={'120px'}
          alignSelf="flex-start">
          mrizkiaiman
        </Text>
      </Center>
      <VStack bg={'muted.900'} borderTopRadius={40} width={'100%'} mt={'-40px'} height={'70%'} p={'30px'}>
        <Text color="white">askjdndsa</Text>
      </VStack>
    </Center>
  )
}

//light-mode: orange.50
//dark-mode: muted.900
