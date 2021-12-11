const PostItem = (props) => {
  return (
    <div>
      <div>userId - {props.post.userId}</div>
      <div>id - {props.post.id}</div>
      <div>title - {props.post.title}</div>
      <div>body - {props.post.body}</div>
      <hr />
    </div>
  )
}

export default PostItem
