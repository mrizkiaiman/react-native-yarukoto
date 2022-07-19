import React from 'react'
import { Text, Center, VStack } from 'native-base'
import { Banner } from '../../components/Banner'

import { useColors } from '../../utils/hooks/useColors'

export const Home = () => {
  const { textColors, containerColors } = useColors()
  return (
    <Center>
      <Banner />
      <VStack bg={containerColors} borderTopRadius={40} width={'100%'} mt={'-40px'} height={'70%'} p={'30px'}>
        <Text color={textColors}>askjdndsa</Text>
      </VStack>
    </Center>
  )
}
