import React from 'react';
import { Link } from 'gatsby';
import { blogbarLinkStyles, blogbarListStyles, blogbarListItemStyles } from './../styles/styles';
export default props => (
  <nav>
    <ul style={blogbarListStyles}>
      <li style={blogbarListItemStyles}><Link style={blogbarLinkStyles} to="/blog/blogbar">Script för automatisk navigering</Link></li>
	<li style={blogbarListItemStyles}><Link style={blogbarLinkStyles} to="/blog/firstpost">Hello Blog!</Link></li>
    </ul>
  </nav>
);