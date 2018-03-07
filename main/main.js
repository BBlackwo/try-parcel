// import a CSS module
import classes from './main.scss';

console.log('classes', classes);

export const template = `
<div class="${classes.main}">
  <h1>Hello From Parcel</h1>
</div>
`;
