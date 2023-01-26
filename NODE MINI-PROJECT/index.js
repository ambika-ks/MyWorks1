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
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       <script src="index.js"></script>
       <link rel="stylesheet" href="style.css">
       <title>MINI - PROJECT</title>
   </head>
   
   <body>
       <div class="jumbotron">
           <h1 class="display-4">QUESTIONNAIRE</h1>
           <p class="lead">This is a simple Survey. Please provide relevant informations.</p>
           <hr class="my-4">
           <ul class="list-group">
               <li class="list-group-item">Enter Your Name           :${answers.name}  </li>
               <li class="list-group-item">Enter Your Location       :${answers.location} </li>
               <li class="list-group-item">Enter Your Favourite Food :${answers.food} </li>
               <li class="list-group-item">Enter Your favourite Color:${answers.color} </li>
               <li class="list-group-item">Enter Your GitHub Username:${answers.github} </li>
           </ul>       
               <p class="lead text-right">
                   <a class="btn btn-primary btn-lg " href="#" role="button">Submit</a>
               </p>              
         </div>      
   </body>
   </html> `;

promptUser()
     .then((answers)=>writeFileAsync('index.html',generateHTML(answers)))
     .then(()=>console.log(`Successfully wrote to index.html`))
     .catch((err)=>console.error(err));