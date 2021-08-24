import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
// import { ThemeProvider } from '@material-ui/styles'

// import theme from './AppStyle'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import FriendForm from './components/FriendForm'

export default function App() {
  return (
    // <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/add">
            <FriendForm />
          </Route>
        </Switch>
      </Router>
    // </ThemeProvider>
  )
}
