import React from 'react';
import FullImageHeader from './fullimageheader';
import BlogBar from './blogbar';
import Nav from './nav'
import { containerStyles, headerTitleStyles, headerDescriptionStyles, blogContentStyles } from '../styles/styles';

export default props => (
  
  <div style={containerStyles}>
    <FullImageHeader url={props.headerImgUrl}>
      {props.pageTitle ? <h1 style={headerTitleStyles}>{props.pageTitle}</h1> : ""}
      {props.headerDescription ? <p style={headerDescriptionStyles}>{props.headerDescription}</p> : ""}
    </FullImageHeader>
    <Nav />
    <div style={blogContentStyles}>
      <aside style={{width: '15%'}}>
        <BlogBar />
      </aside>
      <main style={{width: '70%'}}>
        {props.children}
      </main>
    </div>
  </div>
);