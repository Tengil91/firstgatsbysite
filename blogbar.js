let fs = require('fs');
let Promise = require('promise');
function readFilesInDir(path){
  return new Promise((resolve, rejected) => {
    fs.readdir(path, (err, filenames) => {
        if(err){
          return false;
        }
        let promises = [];
        filenames.forEach((filename) => {
          promises.push(new Promise((resolve, rejected) => {
            fs.readFile(path + '/' + filename, 'utf-8', (err, content) => {
              if(err){
                return;
              }
              let text = content.split('pageTitle="')[1].split('"')[0];
              if(text){
                resolve({text, filename});
              } else {
                resolve(false);
              }
            });
          }));
        });
        Promise.all(promises).then(documentdata => {
          resolve(documentdata);
        })
    });
  });
}
readFilesInDir('./src/pages/blog').then(htmlarray => {
  write(htmlarray);
})

function write(htmlarray){
  let elementarray = htmlarray.map(element => {
    return `<li style={blogbarListItemStyles}><Link style={blogbarLinkStyles} to="/blog/${element.filename.split(".js")[0]}">${element.text}</Link></li>`;
  });
  let writeString = 
`import React from 'react';
import { Link } from 'gatsby';
import { blogbarLinkStyles, blogbarListStyles, blogbarListItemStyles } from './../styles/styles';
export default props => (
  <nav>
    <ul style={blogbarListStyles}>
      ${elementarray.join('\n\t')}
    </ul>
  </nav>
);`;
  writeString += ''
  writeString += ``;
  fs.writeFile('./src/components/blogbar.js', writeString, err => {
    if(err){
      console.log(":s");
      return;
    }
    console.log("yuup :)");
    return;
  });
}
