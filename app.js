//Include NPM Dependencies
var inquirer = require("inquirer");
var fs = require('fs');

//Constructor function for a basic flashcard object
BasicFlashcard = function(frontArg, backArg) {
    this.front = frontArg,
        this.back = backArg,
        this.showFront = function() {
            console.log(this.front);
        },
        this.showBack = function() {
            console.log(this.back);
        }
};

//Constructor function for a cloze-deleted flashcard object.
ClozeFlashcard = function(textArg, clozeArg) {
    this.text = textArg,
        this.cloze = clozeArg,
        this.showText = function() {
            console.log(this.text);
        },
        this.showCloze = function() {
            console.log(this.clozeArg);
        }
};

//Flag to signify if first or multiple card to be generated.
var cardNumber = 0;
//Array to contain user-generated flashcards.
var userFlashcards = [];

//Function to allow user to select basic or cloze-deleted flashcard to create.
var selectCardType = function() {
    if (cardNumber === 0) {
        console.log("Welcome! This program creates basic or cloze-deleted flashcards.");
    }

    inquirer.prompt([{
            type: 'list',
            name: 'type',
            message: 'What type of flashcard do you want to create?',
            choices: ['basic', 'close-deleted']
            }
        }
    }]).then(function(answer) {
    if (answer.type === 'basic') {
        basicCardInquiry();
    } else {
        clozeCardInquiry();
    };
});

//Function to take in user card information and create a basic flashcard. Writes to file.

var basicCardInquiry = function(){
	inquirer.prompt([{
            name: "front",
            message: "What is on the front of the card?"
            },{
            name: "back",
            message: "What is on the back of the card?",
            {
            type: "confirm",
            name: "save",
            message: "Would you like to save flashcard to file?"
        }
	}]).then(function(answers)){

	}
};

//Function to take in user card information and create a cloze-deleted flashcard. Writes to file.

var clozeCardInquiry = function(){
	inquirer.prompt([{
            name: "text",
            message: "What is the full text of the card?",
            validate: function(value) {
                if (isNaN(value) === true) {
                    return true;
                }
                return false;
            },{
            name: "cloze",
            message: "What is on the cloze-deleted side of the card?"
            },{
            type: "confirm",
            name: "save",
            message: "Would you like to save flashcard to file?"
        }
	}]).then(function(answers)){

	}
};

//Function to start the app.
selectCardType();