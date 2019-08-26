import React from "react"
import Header from '../components/header.js';
import Nav from './../components/nav';
import { containerStyles } from '../styles/styles';
export default () => (
  <div style={containerStyles}>
    <Header headerText="Om min sida" />
    <Nav />
    <p>Den är skitcool.</p>
  </div>
)