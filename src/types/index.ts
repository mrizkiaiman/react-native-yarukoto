import * as React from 'react'

export interface WithChildren {
  children?: React.ReactNode
}

export interface ITask {
  id: string
  done: boolean
  description: string
}
