import React from 'react'
import Home from './pages/home/home'
import { Switch, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Header from './components/header/header'
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in-sign-up'

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
