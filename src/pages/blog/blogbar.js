import React from "react";
import BlogPage from '../../components/blogpage';
import headerImg from '../../images/headerimg2.jpg';

export default () => (
  <BlogPage headerImgUrl={headerImg} pageTitle="Script för automatisk navigering" headerDescription="Hur jag automatiserade navigeringen för nya bloginlägg med hjälp av node">
    <h1>Blogbar</h1>
    <ul>
      <li>promises</li>
      <li>pain</li>
      <li>fs read</li>
      <li>fs write</li>
      <li>profit</li>
    </ul>
    
  </BlogPage>
);