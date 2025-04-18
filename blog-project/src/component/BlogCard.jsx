import React from 'react'
import Button from './button'

const BlogCard = ({ item }) => {
  return (
    <div className='card'>
      <img src={item.postImage} alt="" />
      <h4>{item.postName}</h4>

      <Button buttonName={"Read"} nereye={item.id}/>
    </div>
  )
}

export default BlogCard