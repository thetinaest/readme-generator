//requriements
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

//array of questions to be used with inquirer
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a valid title for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a valid description.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'intallation',
        message: 'Please enter installation instructions:',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter valid instructions");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter a usage description for your project: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a valid usage description.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter testing instructions for your project: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter valid testing instructions.");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license option from this list:',
        default: "none",
        choices: [
            {
                name:'MIT License', 
                value: {
                    name:'MIT License',
                    badge:'MIT',
                    link:'https://opensource.org/licenses/MIT'
                }
            },
            {
                name:'ISC License',
                value: {
                    name:'ISC License',
                    badge:'ISC',
                    link:'https://opensource.org/licenses/ISC'
                }
            },
            {
                name:'Apache License 2.0',
                value: {
                    name:'Apache License 2.0',
                    badge:'Apache_2.0',
                    link:'https://www.apache.org/licenses/LICENSE-2.0'
                }
            },
            {
                name:'GNU GPLv3',
                value: {
                    name:'GNU General Public License v3.0',
                    badge:'GNU_GPLv3',
                    link:'https://www.gnu.org/licenses/gpl-3.0.en.html'
                }
            },
            {
                name:'Mozilla Public License 2.0',
                value: {
                    name:'Mozilla Public License 2.0',
                    badge:'MPL_2.0',
                    link:'https://www.mozilla.org/en-US/MPL/2.0/'
                }
            },
            {
                name:'Boost Software License 1.0',
                value: {
                    name:'Boost Software License 1.0',
                    badge:'Boost_1.0',
                    link:'https://www.boost.org/LICENSE_1_0.txt'
                }
            },
            'none'
        ]
    },
    {
        type:'input',
        name: 'username',
        message: 'Please enter your Github username:',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a valid Github username.');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a valid email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please enter contribution guidelines for your project: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter valid contribution guidelines.");
                return false;
            }
        }
    },
];

//creates readme file in dist folder
function writeToFile(data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(`./dist/README.md`, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'README has been created! Please check /dist to see your README file.'
            })
        })
    })
}

//initializes app
function init() {
    inquirer.prompt(questions)
    .then(answers => generateMarkdown(answers))
    .then(markdown => writeToFile(markdown))
    .then(writeFileResponse => console.log(writeFileResponse.message))
    .catch(err => console.log(err))
} 

// Function call to initialize app
init();
