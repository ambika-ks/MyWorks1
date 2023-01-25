const pie = 'apple';

const predictable = () => 1;




const add=(a,b)=>{
  return a+b;
}

const sub= (a,b)=>{
  return a-b;
}

const power= (a,b)=>{
  return Math.pow(a,b);
}


// module.exports is an object we use to store variables or methods
module.exports = {
  pie,
  predictable,
  add,
  sub,
  power
};