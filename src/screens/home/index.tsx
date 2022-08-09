import React from 'react'
import { Text, Center, VStack, ScrollView, Box, Image } from 'native-base'
import { Banner } from '../../components/Banner'
import { TaskItem } from '../../components/AnimatedTaskItem'
import { FloatingNewTaskButton } from '../../components/FloatingNewTaskButton'
import { AnimatePresence } from 'moti'
import { EmptyState } from '../../components/EmptyState'
import { ButtonMotion } from '../../components/containers/ButtonMotion'

import { useColors } from '../../utils/hooks/useColors'
import shortid from 'shortid'
import { ITask } from '../../types'

const initialData = [
  {
    id: shortid.generate(),
    done: false,
    description: 'Morning exercise',
  },
  {
    id: shortid.generate(),
    done: false,
    description: 'Afternoon exercise',
  },
]

export const Home = () => {
  const { containerColors } = useColors()
  const [data, setData] = React.useState<Array<ITask>>(initialData)
  const [editingItemId, setEditingItemId] = React.useState<string | null>('')
  const refScrollView = React.useRef(null)

  const handleToggleTask = React.useCallback((item: ITask) => {
    setData((prevData: Array<ITask>) => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done,
      }

      return newData
    })
  }, [])

  const handleChangeTaskItemSubject = React.useCallback((item, newSubject) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        description: newSubject,
      }
      return newData
    })
  }, [])

  const handleFinishEditingTaskItem = React.useCallback(() => {
    setEditingItemId(null)
  }, [])

  const handleRemoveItem = React.useCallback(item => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
    })
  }, [])

  return (
    <Center flex={1}>
      <Banner
        image={
          <Image
            alt="banner-image"
            source={require('../../assets/banner.png')}
            style={{ height: 300, width: 300, resizeMode: 'contain' }}
          />
        }
      />
      <VStack bg={containerColors} borderTopRadius={24} width={'100%'} mt={'-30px'} flex={1} p={'30px'}>
        {data.length > 0 ? (
          <ScrollView margin={0} padding={0} ref={refScrollView}>
            <AnimatePresence>
              {data.map((item, index) => (
                <TaskItem
                  key={item.id}
                  data={item}
                  checked={item.done}
                  description={item.description}
                  toggleTask={handleToggleTask}
                  onChangeSubject={handleChangeTaskItemSubject}
                  onFinishEditing={handleFinishEditingTaskItem}
                  isEditing={item.id === editingItemId}
                  onRemoveItem={handleRemoveItem}
                  simultaneousHandlers={refScrollView}
                />
              ))}
            </AnimatePresence>
          </ScrollView>
        ) : (
          <EmptyState />
        )}
      </VStack>
      <FloatingNewTaskButton
        onPress={() => {
          const id = shortid.generate()
          setData([
            {
              id,
              description: '',
              done: false,
            },
            ...data,
          ])
          setEditingItemId(id)
        }}
      />
    </Center>
  )
}
