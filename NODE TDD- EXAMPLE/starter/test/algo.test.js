const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("shouls reverse a string", ()=> {
      const str="Hello";
      const rev="olleH";

      const res=new Algo().reverse(str);
      expect(res).toEqual(rev);
    });
  });




  describe("isPalindrome", () => {
    it("Return true if Palindrome",()=>{
        const str="raceacar";
        const res=new Algo().isPalindrome(str);
        expect(res).toEqual(true);
    }); 

    it("Return false , if not Palindrome",()=>{
       const str="neon";
       const res=new Algo().isPalindrome(str);
       expect(res).toEqual(false);
    });
  });





  describe("capitalize", () => {
    it("Return by capitalizing the first letter of each word capitalized",()=>{
      const str="capitalize each word of the string";
      const cap="Capitalize Each Word Of The String";
      const res=new Algo().capitalize(str);
      expect(res).toEqual(cap);
    });
  });
});
