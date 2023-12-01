/*
there are two types of modules in javascript
1. in-line module(with export)
2. export default


import methods
it is also in two ways
if data is exported using export, than import in curly braces
if data is exported using default export, import without curly braces
*/
export const name = "babloo";
export const age = 25;

const message = () => {
    const name = 'babloo';
    const age = 25;
}
export default message;
