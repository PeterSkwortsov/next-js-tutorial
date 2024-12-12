import React from 'react'
import { createTask } from '@/utils/actions'



const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input type="text" placeholder='Пиши тут...' 
        className='input input-bordered w-full max-w-xs'
        name='content'
        required
        />
        <button type='submit' className='btn btn-primary join-item'>Добавить задачу</button>
      </div>
    </form>
  )
}

export default TaskForm