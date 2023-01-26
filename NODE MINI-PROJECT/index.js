// Import libraries
const inquirer=require('inquirer');
const fs= require('fs');
const util=require('util');

const writeFileAsync=util.promisify(fs.writeFile);

const promptUser=()=>
   inquirer.prompt([
    {
        type:'input',
        name:'name',
        message:'Enter your Name?',
    },
    {
        type:'input',
        name:'location',
        message:'Enter your Location?',
    },
    {
        type:'input',
        name:'food',
        message:'Enter your favourite food?'
    },
    {
        type:'input',
        name:'color',
        message:'Enter your favourite color?'
    },
    {
        type:'input',
        name:'github',
        message:'Enter your Github Username?'
    },
   ]);

   const generateHTML=(answers)=>
   `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       
       <title> MINI - PROJECT </title>
   </head>
   <body>
       <h1 style="text-align:center;">|✨|**✨ Open the Console to see the magic ✨**|✨|</h1>
       <script src="script.js"></script>
   </body>
   </html>
   `
