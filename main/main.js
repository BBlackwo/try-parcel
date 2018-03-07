// import a CSS module
import classes from './main.css';

console.log('classes', classes);

export const template = `
<div class="${classes.main}">
  <h1>Hello From Parcel</h1>
</div>
`;
