import React from 'react'
import Link from 'next/link'
import Delete from './Delete';
import prisma from '@/utils/db'

const TaskList = async() => {
    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>No tasks to show...</h2>
}
  return (
    <ul className='mt-8'>
      {tasks.map((task) => {
        return (
          <li key={task.id} className='flex justify-between items-center px-6 py-4 mb-4 border border-base- rounded-lg shadow-lg from-background'>
            <h3 className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>
              {task.content}
            </h3>
            <div className='flex gap-6 items-center'>
              <Link href={`/tasks/${task.id}`} 
              className='btn btn-accent btn-xs'>Edit
              </Link>
            <Delete id={task.id} />

            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList