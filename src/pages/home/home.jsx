import React from 'react'
import Menu from '../../components/menu/menu.jsx'
import '../home/home.styles.scss'

const Home = (props) => {
 console.log(props);
 return (<div className="home">
  <Menu />
 </div>)
}

export default Home;
