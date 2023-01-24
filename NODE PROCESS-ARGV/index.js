// returns an array of command line arguments
console.log(process.argv);

// arguments passed from the command line are accessed by index
console.log(process.argv[2]);
console.log(process.argv[10]);


const a=process.argv[3];
const b=process.argv[5];
console.log(a+b);