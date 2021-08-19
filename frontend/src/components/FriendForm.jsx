import React, { useState } from 'react'

export default function FriendForm({ onPost }) {

  const [friend, setFriend] = useState({
    name: "",
    age: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFriend({
      ...friend,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    onPost(friend)
    setFriend({
      name: "",
      age: ""
    })
  }

  return (
    <form>
      {/* <Input
        variant="outlined"
        fullWidth={true}
        required={true}
        id="name"
        type="text"
        placeholder="Name"
        value={friend.name}
        onChange={handleChange}
      />
      <Input 
        variant="outlined" 
        fullWidth={true} 
        required={true} 
        id="age" 
        type="number" 
        placeholder="Age" 
        value={friend.age} 
        onChange={handleChange} 
      />
      <Button
        variant="contained" 
        color="primary" 
        onClick={handleSubmit}
      >
        Add
      </Button> */}

      <input type="text" value={friend.name} name="name" id="name" placeholder="Name" onChange={handleChange} required/><br />
      <input type="number" value={friend.age} name="age" id="age" placeholder="Age" onChange={handleChange} required/><br />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}
