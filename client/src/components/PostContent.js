import React from 'react'

function PostContent() {
  return (
    <div>
        <input type="text" placeholder='Title'/>
        <input type="text" placeholder='Description'/>
        <input type="file"/>
        <input type="text" placeholder='Category' />
    </div>
  )
}

export default PostContent