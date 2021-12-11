import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, visiblePosts, handleClick }) => {
  if (!posts.length) {
    return <h1>Posts Not Found</h1>
  }
  return (
    <div>
      {posts.slice(0, visiblePosts).map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      {posts.length ? (
        <button
          style={{ marginBottom: '20px' }}
          type='button'
          onClick={handleClick}
        >
          See more
        </button>
      ) : (
        ''
      )}
    </div>
  )
}

export default PostList
