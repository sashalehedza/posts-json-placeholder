import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, visiblePosts }) => {
  return (
    <div>
      {posts.slice(0, visiblePosts).map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}

export default PostList
