import React from 'react'
import { AppBar, Button, Container, Toolbar, Typography } from '@material-ui/core'
import DnsIcon from '@material-ui/icons/Dns';

export default function NavBar() {
  return (
    <div>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <DnsIcon />
            <Typography variant='h6' style={{margin: '0 10px', flexGrow: 1}}>
              My Friends
            </Typography>
            <Button variant='outlined' color="inherit" elevation={0} href="/" >Home</Button>
            <Button variant='outlined' color="inherit" elevation={0} href="/add" >New Friend</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
