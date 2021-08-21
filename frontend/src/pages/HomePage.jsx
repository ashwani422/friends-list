import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { Card, CardHeader, CardContent, Divider, IconButton } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './HomePageStyles'
import { deleteFriend, getFriends } from '../services/api'


export default function HomePage() {

  const classes = useStyles()

  const [friends, setFriends] = useState([])

  const getAllFriends = async () => {
    try {
      const { data } = await getFriends()
      if (!data.length) {
        console.log('No friend found')
        return
      }
      setFriends(data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getAllFriends()
  }, [])

  const handleClick = async (id) => {
    try {
      // const {data} = await deleteFriend(id)
      // console.log(data)
      await deleteFriend(id)
      console.log('Friend deleted')
      // getAllFriends()
      const newFriendList = friends.filter(friend => friend._id !== id)
      setFriends(newFriendList)
    } catch (e) {
      console.log(e.message)
    }
  }


  return (
    <Container maxWidth="lg">
      <div className={classes.toolbar}></div>
      <Grid
        container
        spacing={2}
        className={classes.main}
      >
        {friends.map(friend => (
          <Grid key={friend._id} item xs={12} sm={6} md={4} lg={3}>
            <Card raised={true} elevation={5}>
              <CardHeader
                avatar={<Avatar style={{backgroundColor: '#888'}}><PersonIcon /></Avatar>}
                title={friend.name}
                subheader={`Age: ${friend.age}`}
                action={<IconButton onClick={ () => handleClick(friend._id)}><DeleteIcon /></IconButton>}
              />
              <Divider variant="middle" />
              <CardContent>
                {friend.description}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
