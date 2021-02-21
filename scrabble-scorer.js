// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let scoredWord = input.question("Please provide a word to be scored: ");

   return scoredWord;
};

let simpleScore = function(word){
let score = 0;
for (let i=0; i<word.length;i++){
  score += 1;
}
return score;

};

let vowelBonusScore = function(word){
  let score = 0;
  word = word.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
for (let i=0; i<word.length; i++){
  if (vowels.includes(word[i])){
  score+=3;
  } else {
  score+=1;
  }
} 
return score;
};

let scrabbleScore = function(word){
 word = word.toLowerCase();
	let totalScore = 0;
 
	for (let i = 0; i < word.length; i++) {
    totalScore+=newPointStructure[word[i]];
	}
	return totalScore;

};

const scoringAlgorithms = [
  {name: "Simple Score", description: "Each letter is worth 1 point. ", scoringFunction: simpleScore  },
  {name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt. ", scoringFunction: vowelBonusScore   },
  {name: "Scrabble", description: "The traditional scoring algorithm. ", scoringFunction: scrabbleScore   },
];

function scorerPrompt() {
let userScorerPrompt = input.question("Which scoring algorithm would you like to use? ")

return scoringAlgorithms[userScorerPrompt];
}

function transform(oldPointStructure) {
  let transformValue = {};
  for (const pointValue in oldPointStructure) {
    for (let i=0; i<oldPointStructure[pointValue].length; i++){
    transformValue[oldPointStructure[pointValue][i].toLowerCase()] = parseInt(pointValue); 
    }
  
  }

  return transformValue;

};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
      let inputScrableScore = initialPrompt();
      let scoringAlgorithm = scorerPrompt();

      console.log(`Score for ${inputScrableScore} is: `+ scoringAlgorithm.scoringFunction(inputScrableScore));
   

   return inputScrableScore
   

  
};


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

