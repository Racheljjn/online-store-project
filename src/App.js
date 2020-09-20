import React from 'react'
import Home from './pages/home/home'
import { Route } from 'react-router-dom'

const Hats = (props) =>{
  console.log(props);
  return <div>
    <h1>Hats Page</h1>
  </div>
}

function App (props) {
  
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path="/hats" component={Hats} />
    </div>
  )
}

export default App
