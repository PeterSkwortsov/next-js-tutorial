'use client'
import React from 'react'

const error = (error) => {
  return (
      <div>        
        {error.error.message}<br></br>
 Мы исправим это!
        А пока, посмотрите другие разделы =)
    </div>
  )
}

export default error