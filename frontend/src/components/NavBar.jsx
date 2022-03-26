import React from 'react'
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@material-ui/core'
import DnsIcon from '@material-ui/icons/Dns';
import { useHistory } from 'react-router-dom';


export default function NavBar() {

  const history = useHistory()

  return (
    <div>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <IconButton color='inherit' onClick={() => history.push('/')}>
              <DnsIcon />
            </IconButton>
            <Typography variant='h6' style={{margin: '0 10px', flexGrow: 1}}>
              My Friends
            </Typography>
            <Button variant='outlined' color="inherit" elevation={0} href="/add" >New Friend</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
