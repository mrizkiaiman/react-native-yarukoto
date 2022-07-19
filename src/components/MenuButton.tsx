import * as React from 'react'
import { Button, Icon, IButtonProps } from 'native-base'
import { Feather } from '@expo/vector-icons'

import { useColors } from '../utils/hooks/useColors'

interface MenuButtonProps extends IButtonProps {
  active: boolean
  icon: string
  children: React.ReactNode
}

export const MenuButton: React.FC<MenuButtonProps> = ({ active, icon, children, onPress }) => {
  const { navigatorColors } = useColors()
  return (
    <Button
      onPress={onPress}
      size="lg"
      _text={{
        fontWeight: 'bold',
        fontSize: 18,
      }}
      _light={{
        colorScheme: 'blue',
        _pressed: {
          bg: 'cyan.100',
        },
        _text: {
          color: active ? 'white' : 'black',
        },
      }}
      _dark={{
        colorScheme: 'darkBlue',
        _pressed: {
          bg: 'teal.800',
        },
        _text: {
          color: active ? 'white' : undefined,
        },
      }}
      bg={active ? undefined : 'transparent'}
      variant="solid"
      justifyContent="flex-start"
      leftIcon={
        <Icon
          as={Feather}
          name={icon}
          color={navigatorColors}
          size="lg"
          opacity={1}
          mt={'2px'}
          mr={'5px'}
          fontWeight={'bold'}
        />
      }>
      {children}
    </Button>
  )
}
