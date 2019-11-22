// import a CSS module
import * as classes from './main.scss';

console.log('classes', classes);

export const template = /*html*/`
<div>
  <h1 class="${classes.heading}">Hello From Parcel</h1>
  <p class="${classes.text}">Some body text</p>
</div>
`;
