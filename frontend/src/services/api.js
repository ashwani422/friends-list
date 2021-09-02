import axios from "axios"

const url = '/friends'

export const getFriends = async (id) => {
  const Id = id || ''
  return await axios.get(url + '/' + Id)
}

export const postFriend = async (friend) => {
  return await axios.post(url, friend)
}

export const deleteFriend = async (id) => {
  return await axios.delete(url + "/" + id)
}

export const updateFriend = async (id, friend) => {
  return await axios.put(url + '/' + id, friend)
}
