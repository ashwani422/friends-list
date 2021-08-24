import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => {
  // console.log(theme)
  return ({
    toolbar: theme.mixins.toolbar,
    main: {
      marginTop: theme.spacing(4),
    },
  })
})

export default useStyles