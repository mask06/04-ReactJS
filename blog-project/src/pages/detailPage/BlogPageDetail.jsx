import React from 'react'
import PageHeading from '../../component/PageHeading'
import PageText from '../../component/PageText'
import { useParams } from 'react-router-dom'
import { posts } from '../../data/data'
import Button from '../../component/button'

const BlogPageDetail = () => {
  const parametre = useParams();
  console.log(parametre);
  const postIndex = parametre.blogID-1;
  
  return (
    <div className='blog-detail'><PageHeading heading={posts[postIndex].postName} />
      <img src={posts[postIndex].postImage}alt="" />
      <PageText text={posts[postIndex].postText}/>
      <span>{posts[postIndex].postDate}</span>
      <Button buttonName={"Back To Main"} nereye={"/ank18/blog"}/>
    </div>
  )
}

export default BlogPageDetail