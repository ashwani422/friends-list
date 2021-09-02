import makeStyles from "@material-ui/core/styles/makeStyles"

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

export default useStyles