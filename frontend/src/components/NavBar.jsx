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
            <Typography variant='h6' style={{margin: '0 10px'}}>
              My Friends
            </Typography>
            <Button variant="outlined" color="inherit" size="small" elevation={0} href="/" style={{margin: '0 5px'}}>Home</Button>
            <Button variant="outlined" color="inherit" size="small" elevation={0} href="/add" style={{margin: '0 5px'}}>New Friend</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
