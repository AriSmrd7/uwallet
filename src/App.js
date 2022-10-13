import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Wallet from './screens/Wallet'
import Market from './screens/Market'
import Swap from './screens/Swap'
import Setting from './screens/Setting'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Wallet} />
      <Route exact path='/market' component={Market} />
      <Route exact path='/swap' component={Swap} />
      <Route exact path='/setting' component={Setting} />
    </Router>
  )
}

export default App
