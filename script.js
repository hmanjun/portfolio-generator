const fs = require("fs")
const inquirer = require("inquirer")

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: "name"
        },
        {
            type:'input',
            message: "What is your location?",
            name: "location"
        },
        {
            type:'input',
            message: "Enter a simple bio: ",
            name: "bio"
        },
        {
            type: 'input',
            message: "What is your GitHub link?",
            name: "github"
        },
        {
            type:"input",
            message: "What is your linkedIn link",
            name: "linkedin"
        }
    ])
    .then(response =>{
        console.log(response)
        /*const headerContent = "<!DOCTYPE html><head> <meta charset='utf-8'/> <title>HTML Box Model</title> <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossorigin='anonymous'> <link rel='stylesheet' type='text/css' href='./assets/css/style.css'> </head>"

        const htmlContent = `<div><h1>Name: ${response.name}</h1><h1>Location: ${response.location}</h1> <h1>Bio: ${response.bio}</h1> <h1>Github link: ${response.github}</h1> 
        
        </div>` */

        const htmlContent = `<!DOCTYPE html>
        <html lang="en-US">
        
          <head>
            <meta charset="UTF-8">
            <title>HTML Box Model</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
          </head>
        
          <body>
            <main>
                <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Occupation</th>
                        <th scope="col">LinkedIn URL</th>
                        <th scope="col">GitHub URL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>${response.name}</td>
                        <td>${response.location}</td>
                        <td>${response.bio}</td>
                        <td>${response.linkedin}</td>
                        <td>${response.github}</td>
                      </tr>
                      <tr>
                  
                    </tbody>
                  </table>
            </main>
        
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
          </body>`
        fs.writeFile(`${response.name}.html`, htmlContent, err => {
            if(err) throw err
            else console.log("success")
        })
    })

