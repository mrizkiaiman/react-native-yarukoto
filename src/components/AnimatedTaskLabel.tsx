import * as React from 'react'

import { useColorMode, Box, HStack, Text, useToken, useColorModeValue } from 'native-base'
import { WithChildren } from '../types'

import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  interpolateColor,
  withSpring,
} from 'react-native-reanimated'

const AnimatedBox = Animated.createAnimatedComponent(Box)
const AnimatedHStack = Animated.createAnimatedComponent(HStack)
const AnimatedText = Animated.createAnimatedComponent(Text)

interface AnimatedTaskLabelProps extends WithChildren {
  strikethrough: boolean
}

export const TaskLabel: React.FC<AnimatedTaskLabelProps> = React.memo(({ strikethrough, children }) => {
  const textColor = useToken('colors', useColorModeValue('darkText', 'lightText'))
  const inactiveTextColor = useToken('colors', useColorModeValue('muted.400', 'muted.600'))

  const hstackOffset = useSharedValue(0)
  const hstackAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [{ translateY: hstackOffset.value }],
    }),
    [strikethrough],
  )
  const textColorProgress = useSharedValue(0)
  const textColorAnimatedStyles = useAnimatedStyle(
    () => ({
      color: interpolateColor(textColorProgress.value, [0, 1], [textColor, inactiveTextColor]),
    }),
    [strikethrough, textColor, inactiveTextColor],
  )
  const strikethroughWidth = useSharedValue(0)
  const strikethroughAnimatedStyles = useAnimatedStyle(
    () => ({
      width: `${strikethroughWidth.value * 100}%`,
      borderBottomColor: interpolateColor(textColorProgress.value, [0, 1], [textColor, inactiveTextColor]),
    }),
    [strikethrough, textColor, inactiveTextColor],
  )

  React.useEffect(() => {
    const easing = Easing.out(Easing.quad)
    if (strikethrough) {
      hstackOffset.value = withSequence(
        withTiming(4, { duration: 200, easing }),
        withTiming(0, { duration: 200, easing }),
      )
      strikethroughWidth.value = withTiming(1, { duration: 400, easing })
      textColorProgress.value = withDelay(500, withTiming(1, { duration: 400, easing }))
    } else {
      strikethroughWidth.value = withTiming(0, { duration: 400, easing })
      textColorProgress.value = withTiming(0, { duration: 400, easing })
    }
  }, [strikethrough])

  return (
    <AnimatedHStack alignItems="center" style={[hstackAnimatedStyles]}>
      <AnimatedText fontSize={14} noOfLines={1} isTruncated pl={3} style={[textColorAnimatedStyles]}>
        {children}
      </AnimatedText>
      <AnimatedBox position="absolute" h={1} left={2} borderBottomWidth={1} style={[strikethroughAnimatedStyles]} />
    </AnimatedHStack>
  )
})
