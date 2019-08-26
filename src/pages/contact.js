import React from 'react';
import Header from './../components/header.js'
import Nav from './../components/nav';
import FullImageHeader from '../components/fullimageheader';
import headerImg from '../images/headerimg2.jpg';
import { containerStyles } from '../styles/styles';

export default () => (
  <div style={containerStyles}>
    <FullImageHeader url={headerImg}>
      <h1 style={{color: '#fff', fontSize: 48}}>Välkommen</h1>
      <p>Detta är en sida där jag lägger upp lite av det jag håller på med.</p>
    </FullImageHeader>
    <Header headerText="Kontakta mig bara om det är viktigt" />
    <Nav />
    <p>Kontaktuppgifter kommer kanske någon gång. Snart!</p>
  </div>);