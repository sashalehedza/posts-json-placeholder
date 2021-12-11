import React, { useState, useEffect, useCallback } from 'react'
import PostList from './components/PostList'
import MySelect from './components/UI/MySelect'

import { getPosts } from './service/api'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [postsPerPage, setPostPerPage] = useState(5)

  const [filteredList, setFilteredList] = useState(posts)
  const [selectedUserId, setSelectedUserId] = useState('')
  const [selectedId, setSelectedId] = useState('')
  const [selectedTitle, setSelectedTitle] = useState('')
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      setTimeout(async () => {
        const res = await getPosts()
        setPosts(res.data)
        setLoading(false)
      }, 1000)
    }

    fetchPosts()
  }, [selectedUserId])

  const handleUserIdChange = (event) => {
    setSelectedUserId(event)
    setPostPerPage(5)
    console.log(event)
  }
  const handleIdChange = (event) => {
    setSelectedId(event)
    setPostPerPage(5)
    console.log(event)
  }
  const handleTitleChange = (event) => {
    setSelectedTitle(event)
    setPostPerPage(5)
    console.log(event)
  }

  useEffect(() => {
    const filterByUserId = (filteredData) => {
      if (!selectedUserId) {
        return filteredData
      }

      const filteredPosts = filteredData.filter(
        (post) =>
          post.userId.toString().toLowerCase() ===
          selectedUserId.toString().toLowerCase()
      )
      return filteredPosts
    }

    const filterById = (filteredData) => {
      if (!selectedId) {
        return filteredData
      }

      const filteredPosts = filteredData.filter(
        (post) =>
          post.id.toString().toLowerCase() ===
          selectedId.toString().toLowerCase()
      )
      return filteredPosts
    }

    const filterByTitle = (filteredData) => {
      if (!selectedTitle) {
        return filteredData
      }

      const filteredPhotos = filteredData.filter(
        (post) =>
          post.title
            .toString()
            .toLowerCase()
            .split(' ')
            .indexOf(selectedTitle.toString().toLowerCase()) !== -1
      )
      return filteredPhotos
    }

    var filteredData = filterByUserId(posts)
    filteredData = filterById(filteredData)
    filteredData = filterByTitle(filteredData)

    setFilteredList(filteredData)
  }, [selectedUserId, selectedId, selectedTitle, posts])

  const handleClick = useCallback(() => {
    setPostPerPage((prevVisiblePosts) => prevVisiblePosts + 5)
  }, [])

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Posts</h1>
      <MySelect
        value={selectedUserId}
        onChange={(event) => handleUserIdChange(event)}
        defaultValue='UserId'
        options={[
          { value: '1', name: '1' },
          { value: '2', name: '2' },
          { value: '3', name: '3' },
          { value: '4', name: '4' },
          { value: '5', name: '5' },
          { value: '6', name: '6' },
          { value: '7', name: '7' },
          { value: '8', name: '8' },
          { value: '9', name: '9' },
          { value: '10', name: '10' },
        ]}
      />
      <MySelect
        value={selectedId}
        onChange={(event) => handleIdChange(event)}
        defaultValue='Id'
        options={[
          { value: '1', name: '1' },
          { value: '2', name: '2' },
          { value: '3', name: '3' },
          { value: '4', name: '4' },
          { value: '5', name: '5' },
          { value: '6', name: '6' },
          { value: '7', name: '7' },
          { value: '8', name: '8' },
          { value: '9', name: '9' },
          { value: '10', name: '10' },
        ]}
      />
      <MySelect
        value={selectedTitle}
        onChange={(event) => handleTitleChange(event)}
        defaultValue='Title'
        options={[
          { value: 'sunt', name: 'sunt' },
          { value: 'qui', name: 'qui' },
          { value: 'ea', name: 'ea' },
        ]}
      />

      {loading ? (
        <h3>Loading Posts</h3>
      ) : (
        <>
          <PostList
            posts={filteredList}
            visiblePosts={postsPerPage}
            handleClick={handleClick}
          />
        </>
      )}
    </div>
  )
}

export default App
