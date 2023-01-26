// 1. Using arrays
//We cannot use the first and 2 nd together because const do not allow re asiigning values
//So if we want to ru 2nd, then disable 1st

// const songs = ['Bad Guy', 'Old Town Road', '7 Rings'];
// for (const value of songs) {
//   console.log(value);
// }

//output
// Bad Guy
// Old Town Road
// 7 Rings


// 2. Using map
const songs = new Map([['Bad Guy', 1], ['Old Town Road', 2]]);
for (const [key, value] of songs) {
  console.log(`${key}'s chart position is ${value}`);
}

// Output:
// Bad Guy's chart position is 1
// Old Town Road's chart position is 2
