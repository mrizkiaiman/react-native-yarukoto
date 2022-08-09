import * as React from 'react'
import { View } from 'moti'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import { Box, Text, useColorMode, Input, HStack, Icon } from 'native-base'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { ITask } from '../types/index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TaskLabel } from '../components/AnimatedTaskLabel'
import { Feather } from '@expo/vector-icons'
import { useColors } from '../utils/hooks/useColors'

interface TaskItemProps extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  description: string
  checked: boolean
  toggleTask: (item: ITask) => void
  data: ITask
  onChangeSubject: (item: ITask, newSubject: string) => void
  onRemoveItem: (item: ITask) => void
  onFinishEditing: () => void
  isEditing: boolean
}

export const TaskItem: React.FC<TaskItemProps> = ({
  description,
  checked,
  toggleTask,
  data,
  onChangeSubject,
  onFinishEditing,
  isEditing,
  onRemoveItem,
}) => {
  const { colorMode } = useColorMode()
  const { containerColors } = useColors()

  const handleToggleCheckbox = React.useCallback(() => {
    toggleTask(data)
  }, [data])

  const handleChangeSubject = React.useCallback(
    (input: string) => {
      onChangeSubject(data, input)
    },
    [data],
  )

  const handleRemoveItem = React.useCallback(() => {
    onRemoveItem(data)
  }, [data])

  return (
    <Swipeable renderRightActions={SwipeRightAction} onSwipeableRightOpen={handleRemoveItem}>
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
        <Box bg={containerColors}>
          <Box flexDirection={'row'} alignItems={'center'} py={2}>
            <Box h={30} w={30}>
              <TouchableOpacity onPress={handleToggleCheckbox}>
                <AnimatedCheckbox
                  boxOutlineColor={colorMode === 'light' ? '#1f2937' : 'white'}
                  checkmarkColor={colorMode === 'light' ? '#164e63' : '#374151'}
                  highlightColor={colorMode === 'light' ? '#fdba74' : '#fef3c7'}
                  checked={checked}
                />
              </TouchableOpacity>
            </Box>
            <HStack height={'32px'} alignItems="center">
              {isEditing ? (
                <Input
                  placeholder="Task"
                  value={description}
                  variant="unstyled"
                  fontSize={14}
                  autoFocus
                  blurOnSubmit
                  onChangeText={text => handleChangeSubject(text)}
                  onBlur={onFinishEditing}
                />
              ) : (
                <TaskLabel strikethrough={checked}>{description}</TaskLabel>
              )}
            </HStack>
          </Box>
        </Box>
      </View>
    </Swipeable>
  )
}

const SwipeRightAction = () => {
  return (
    <Box flex={1} bg="danger.600" alignItems="flex-end" justifyContent="center" pr={4} borderRadius={4}>
      <Icon color="white" as={<Feather name="trash-2" />} size="md" />
    </Box>
  )
}
