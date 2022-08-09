import * as React from 'react'
import { Linking, TouchableOpacity } from 'react-native'
import { HStack, Icon, Text, IconButton } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { useColors } from '../../../utils/hooks/useColors'
import { WEB } from '../../../_config'

export interface SocialMediaProps {
  icon: string
  value: string
  url: string
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ icon, value, url }) => {
  const { navigatorColors } = useColors()
  const openURL = () => {
    const defaultURL = url ? url : WEB
    Linking.openURL(defaultURL)
  }

  return (
    <HStack w="full" alignItems={'center'} mt={0}>
      <IconButton
        borderRadius={100}
        _icon={{
          as: Ionicons,
          name: icon,
          size: 6,
          color: navigatorColors,
        }}
      />
      <TouchableOpacity style={{ paddingLeft: 24 }} onPress={openURL}>
        <Text fontWeight={'semibold'}>{value}</Text>
      </TouchableOpacity>
    </HStack>
  )
}
