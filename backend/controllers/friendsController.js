import Friend from "../models/friend.js"

export const getFriends = async (req, res) => {
  try {
    const friends = await Friend.find()
    // console.log(friends)
    res.status(200).json(friends)
  } catch (err) {
    console.log(err.message)
    res.json({ message: err.message })
  }
}


export const postFriend = async (req, res) => {
  try {
    const friend = new Friend(req.body)
    const result = await friend.save()
    console.log(result)
    res.status(200).json(result)
  } catch (err) {
    console.log(err.message)
    res.json({ message: err.message })
  }
}


export const deleteFriend = async (req, res) => {
  try {
    // console.log(req.params)
    // res.end()
    const friend = await Friend.findByIdAndRemove({_id: req.params.id})
    res.status(200).json(friend)
  } catch (err) {
    console.log(err.message)
    res.json({ message: err.message })
  }
}


export const updateFriend = async (req, res) => {
  try {
    // console.log(req.params)
    // res.end()
    const friend = await Friend.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(friend)
    res.end()
  } catch (err) {
    console.log(err.message)
    res.json({ message: err.message })
  }
}