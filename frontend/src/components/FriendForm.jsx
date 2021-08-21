import React from 'react'
import { Button, Container, makeStyles, TextField } from '@material-ui/core'

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

  return (
    <div>
      <div className={classes.toolbar}></div>
      <Container maxWidth="xs" className={classes.formContainer}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField className={classes.formField} variant="outlined" label="Name" />
          <TextField className={classes.formField} variant="outlined" label="Age" />
          <TextField className={classes.formField} variant="outlined" label="Describe your friend" multiline rows={2} />
          <Button className={classes.formField} variant="contained" color='primary'>Add</Button>
        </form>
      </Container>
    </div>
  )
}
