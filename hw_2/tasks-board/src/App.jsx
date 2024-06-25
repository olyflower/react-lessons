import React from 'react'
import TaskList from './components/TaskList/TaskList'
import {tasks} from './data/data'

export default function App() {
  return (
    <>
      <TaskList list={tasks}/>
    </>
  )
}
