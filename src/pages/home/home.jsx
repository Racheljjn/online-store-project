import React from 'react'
import Menu from '../../components/menu/Menu.jsx'
import '../home/home.styles.scss'

const Home = (props) => {
 console.log(props);
 return (<div className="home">
  <Menu />
 </div>)
}

export default Home;
