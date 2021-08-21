import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import FriendForm from './components/FriendForm'

export default function App() {
  return (
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
  )
}
