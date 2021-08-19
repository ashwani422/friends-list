import axios from "axios"

const url = '/friends'

export const getFriends = async () => {
  return await axios.get(url)
}

export const postFriend = async (friend) => {
  return await axios.post(url, friend)
}

export const deleteFriend = async (id) => {
  return await axios.delete(url + "/" + id)
}

export const updateFriend = async (friend) => {
  return await axios.put(url, friend)
}
