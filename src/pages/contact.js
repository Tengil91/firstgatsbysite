import React from 'react';
import Header from './../components/header.js'
import Nav from './../components/nav';
import { containerStyles } from '../styles/styles';

export default () => (
  <div style={containerStyles}>
    <Header headerText="Kontakta mig bara om det är viktigt" />
    <Nav />
    <p>Kontaktuppgifter kommer kanske någon gång. Snart!</p>
  </div>);