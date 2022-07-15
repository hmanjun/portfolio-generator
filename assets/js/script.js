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
        const htmlContent = "<!DOCTYPE html><head> <meta charset='utf-8'/>  </head></html>"
    })

