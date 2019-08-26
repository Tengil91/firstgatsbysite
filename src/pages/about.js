import React from "react"
import Header from '../components/header.js';
import Nav from './../components/nav';
import { containerStyles } from '../styles/styles';
export default () => (
  <div style={containerStyles}>
    <FullImageHeader url={headerImg}>
      <h1 style={{color: '#fff', fontSize: 48}}>Välkommen</h1>
      <p>Detta är en sida där jag lägger upp lite av det jag håller på med.</p>
    </FullImageHeader>
    <Header headerText="Om min sida" />
    <Nav />
    <p>Den är skitcool.</p>
  </div>
)