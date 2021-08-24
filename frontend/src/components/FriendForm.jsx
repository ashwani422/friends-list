import React, {useState} from 'react'
import { Button, Container, makeStyles, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { postFriend } from '../services/api'

const useStyles = makeStyles(theme => {
  return ({
    toolbar: theme.mixins.toolbar,
    formContainer: {
      marginTop: theme.spacing(5)
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    formField: {
      marginTop: '10px'
    }
  })
})

export default function FriendForm() {
  
  const classes = useStyles()
  const history = useHistory()
  const [friend, setFriend] = useState({
    name: '',
    age: '',
    description: ''
  })

  const handleChange = e => {
    const {name, value} = e.target

    setFriend(previousFriend => {
      return {
        ...previousFriend,
        [name]: value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    
    try {
      const {data} = await postFriend(friend)
      console.log(data)
    } catch (e) {
      console.log(e.message)
    }
    history.push('/')

  }

  return (
    <div>
      <div className={classes.toolbar}></div>
      <Container maxWidth="xs" className={classes.formContainer}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField className={classes.formField} variant="outlined" label="Name" name="name" onChange={handleChange} />
          <TextField className={classes.formField} variant="outlined" type="number" label="Age" name="age" onChange={handleChange} />
          <TextField className={classes.formField} variant="outlined" label="Describe your friend" name="description" multiline rows={2} onChange={handleChange} />
          <Button className={classes.formField} variant="contained" color='primary' onClick={handleSubmit}>Add</Button>
        </form>
      </Container>
    </div>
  )
}
