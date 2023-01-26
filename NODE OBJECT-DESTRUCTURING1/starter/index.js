// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

// TODO: Destructure the object 'nodejs'
const{name,type}=nodejs;
console.log('==================================');
console.log(name); // <= Node.js
console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// TODO: Destructure the nested object 'js'
console.log('==================================');
const {framework1,framework2}=js.tools.frameworks;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
console.log('==================================');
const languages = ['HTML', 'CSS', 'JavaScript'];

// TODO: Destructure the array 'languages'
const [markup,style,scripting]=languages;
//const.markup=languages[0];
//const.style=languages[1];
//const.scripting=languages[2]; It works like this

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML
console.log('==================================');