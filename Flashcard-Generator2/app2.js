
//This version is faster than the modularized version submitted for class and creates a json-formatted file.

//Include NPM Dependencies -native to Node.
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require('fs');

var deckName = '';
var flashcardDeckObj = {};

//Creates a file to store the flashcard deck through a series of readline prompts.
var createFlashcardDeck = function() {
    process.stdout.write("\n");
    rl.question("What do you want to name your flashcard deck? \n", function(answer) {
        deckName = answer.toLowerCase().trim() + ".json";
        fs.writeFileSync(deckName, "");
        process.stdout.write("\n"+ deckName + " file deck created! \n");
        createFlashcard();
    });
};


//Creates a flashcard object and saves to .json file.
var createFlashcard = function() {
    rl.question("What kind of card do you want to create -basic or cloze-deleted? \n", function(answer) {
        var choice = answer.toLowerCase().trim();
        if (choice === 'basic') {
            rl.question("What is on the front of the card? \n", function(answer) {
                var front = answer.trim();
                rl.question("What is on the back of the card? \n", function(answer) {
                    var back = answer.trim();
                    process.stdout.write("\nFront:"+ front);
                    process.stdout.write("Back:"+ back + "\n");
                    rl.question("Type 'save' to save flashcard to file, enter to continue, or 'exit'to exit program \n",
                        function(answer) {
                            if (answer === 'save') {
                                flashcardDeckObj[front] = back ;
                                createFlashcard();
                            } else if (answer === 'exit') {
                                fs.appendFile(deckName, JSON.stringify(flashcardDeckObj));
                                process.stdout.write("\nGoodbye!\n");
                                rl.close();
                            } else {
                                createFlashcard();
                            }
                        });
                });

            });
        }
    });

};

createFlashcardDeck();
