import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Box } from 'native-base'
import { Foundation } from '@expo/vector-icons'

import { useColorMode } from 'native-base'

interface FloatingNewTaskButtonProps {
  onPress: () => void
}

export const FloatingNewTaskButton: React.FC<FloatingNewTaskButtonProps> = ({ onPress }) => {
  const { colorMode } = useColorMode()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, backgroundColor: colorMode === 'light' ? '#0e7490' : '#ffedd5' }}>
      <Foundation name="plus" size={24} color={colorMode === 'light' ? 'white' : 'black'} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: 100,
    backgroundColor: 'red',
  },
})
