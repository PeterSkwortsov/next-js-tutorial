import { getTask } from '@/utils/actions'
import React from 'react'
import Link from 'next/link'
import EditForm from '@/app/component/EditForm'

const SingleTaskPage = async ({params}) => {
    const task = await getTask(params.id)
  return (
    <>
        <div className='mb-16'>
            <Link href={'/tasks'} className='btn btn-accent'>
            Назад
            </Link>
        </div>
          <EditForm task={task} />

    </>
  )
}

export default SingleTaskPage