import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { selectAllPosts } from './postSlice';
export default function PostList() {

    const posts=useSelector(selectAllPosts);

    const renderedpost=posts.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ))
  return (

    <div>
        <section>
            <h2>Posts</h2>
            {renderedpost}
        </section>
    </div>
    
  )
}
