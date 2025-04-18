import React from 'react'
import PageHeading from '../component/PageHeading'
import { posts } from '../data/data'
import BlogCard from '../component/BlogCard'

const BlogPage = () => {
  return (
    <div className='blog-page'>
      <PageHeading heading={"Our Posts"}/>
      <div className='card-list'>
        {posts.map(item=>
          <BlogCard key={item.id} item={item}/>
        )}
      </div>
    </div>
  )
}

export default BlogPage