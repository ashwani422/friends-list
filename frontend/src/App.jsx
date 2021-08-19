import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'

import './app.css'
import Friend from './components/Friend'
import FriendForm from './components/FriendForm'
import { getFriends, postFriend, deleteFriend } from './services/api'

export default function App() {

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [render, setRender] = useState(false)
  const [friends, setFriends] = useState([])

  const getAllFriends = async () => {
    try {
      const { data } = await getFriends()
      if (Array.isArray(data) && !data.length) {
        // throw 'data is empty';
        throw new Error("No friends")
      }
      setFriends(data)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      setIsError(e.message)
    }
  }

  const postNewFriend = async (friend) => {
    try {
      // await axios.post('/friends', friend)
      const { data } = await postFriend(friend)
      console.log(data)
      setRender(true) 
    } catch (e) {
      setIsLoading(false)
      setIsError(e.message)
    }
  }
  
  
  const deleteAFriend = async (id) => {
    try {
      const {data} = await deleteFriend(id)
      console.log(data)
      setRender(true)
    } catch (e) {
      setIsLoading(false)
      setIsError(e.message)
    }
  }

  useEffect(() => {
    getAllFriends()
    console.log("use effect 1")
    return () => {
      setRender(false)
    }
  }, [render])



  return (
    <Container maxWidth='lg'>
      <FriendForm
        onPost={postNewFriend}
      />
      <h1 style={{ margin: "10px 0" }}>Friends:</h1>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>}
      {friends && friends.map(friend => <Friend
        key={friend._id}
        id={friend._id}
        name={friend.name}
        age={friend.age}
        onDelete={deleteAFriend}
      />)}
    </Container>
  )
}
