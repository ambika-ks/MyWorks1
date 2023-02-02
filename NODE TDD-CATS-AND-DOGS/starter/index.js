// Creates an object and sets it to "dog"
const dog = {
  rain: true,
  noise: "Woof!",
  makeNoise() {   
    if (this.rain === true)// The 'this' keyword refers to the object it's called from
     {
      console.log(`Dog makes ${this.noise} sound`);
    }
  }
};



// Creates an object and sets it to "cat"
const cat = {
  rain: false,
  noise: "Meow!",
  makeNoise() {
    if (this.rain === true) {
      console.log(`Cat makes ${this.noise} sound`);
    }
  }
};



// Calls the "makeNoise" methods for both objects
dog.makeNoise();
cat.rain = true;
cat.makeNoise();



// Creates a function called "massHysteria" which takes in both objects and
// Prints a message to the screen if ".rain" is true for both of them
const massHysteria = (dog, cat) => {
  if (dog.rain === true && cat.rain === true) {
    console.log("dog AND cat LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dog, cat);
