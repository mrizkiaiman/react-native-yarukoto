import * as React from 'react'
import { Box, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { View } from 'moti'

import EmptyStateImage from '../assets/empty-state.svg'

interface EmptyStateProps {
  onPress?: () => void
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onPress }) => {
  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -32,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        marginBottom: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}>
      <Box justifyContent={'center'} alignItems={'center'}>
        <EmptyStateImage width={180} height={300} />
        <Text mt={-6}>You have no task</Text>
      </Box>
    </View>
  )
}
