import React, { useState, useRef } from 'react'
import { Button, Container, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import useStyles from './FriendFormStyles'
import { postFriend, updateFriend } from '../services/api'


export default function FriendForm() {

  const classes = useStyles()
  const history = useHistory()

  let name = '',
    age = '',
    description = ''

  const isUpdate = useRef(false)
  // isUpdate.current = false
  
  if (history.location.state) {
    isUpdate.current = true

    name = history.location.state.name
    age = history.location.state.age
    description = history.location.state.description
  }

  const [friend, setFriend] = useState({
    name: name,
    age: age,
    description: description
  })

  
  const handleChange = e => {
    const { name, value } = e.target

    setFriend(previousFriend => {
      return {
        ...previousFriend,
        [name]: value
      }
    })
  }

  const handleAdd = async e => {
    e.preventDefault()

    try {
      const { data } = await postFriend(friend)
      console.log(data)
      history.push('/')
    } catch (e) {
      console.error(e.message)
    }

  }

  const handleUpdate = async (e, id) => {
    e.preventDefault()
    try {
      const {data} = await updateFriend(id, friend)
      console.log(data)
      history.location.state = ''
      history.push('/')
    } catch (e) {
      console.error(e.message)      
    }
  }

  return (
    <div>
      <div className={classes.toolbar}></div>
      <Container maxWidth="xs" className={classes.formContainer}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField className={classes.formField} variant="outlined" label="Name" name="name" value={friend.name} onChange={handleChange} />
          <TextField className={classes.formField} variant="outlined" type="number" label="Age" name="age" value={friend.age} onChange={handleChange} />
          <TextField className={classes.formField} variant="outlined" label="Describe your friend" name="description" value={friend.description} multiline rows={2} onChange={handleChange} />
          <Button className={classes.formField} variant="contained" color='primary' onClick={isUpdate.current ? (e) => handleUpdate(e, history.location.state._id) : handleAdd}>{isUpdate.current ? 'Update' : 'Add'}</Button>
        </form>
      </Container>
    </div>
  )
}
