import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    <HashRouter>
    <Route path="/" exact component={() => <h1>Home/Login</h1>} />
    <Route path="/rooms" exact component={() => <h1>Home/Login</h1>} />
    </HashRouter>
  )
}

export default App
