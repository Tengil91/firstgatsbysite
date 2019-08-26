import React from "react"
import Header from './../components/header';
import Nav from './../components/nav';
import { containerStyles } from '../styles/styles';
import FullImageHeader from '../components/fullimageheader';
import headerImg from '../images/headerimg2.jpg';

export default () => (
  <div style={containerStyles}>
    <FullImageHeader url={headerImg}>
      <h1 style={{color: '#fff', fontSize: 48}}>Välkommen</h1>
      <p style={{color: '#fff'}}>Här finns lite grejer jag har gjort</p>
    </FullImageHeader>
    <Header headerText="Min Sida" />
    <Nav />
    <p style={{backgroundColor: 'lightblue'}}>hello me!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
  )
