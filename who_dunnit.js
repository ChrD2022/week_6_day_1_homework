
// Episode_1---------------------------------------------------------------------------------------------------------------------------------------
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// ANSWER: Miss Scarlet as 'scenario" is declared globally

// Episode_2---------------------------------------------------------------------------------------------------------------------------------------
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ANSWER: Mrs. Peacock, the murderer is initially prof plum but a function was written to change this then was run to change.
//I'm unsure as const makes it an error when I run the episode.

// Episode_3---------------------------------------------------------------------------------------------------------------------------------------
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
// let murderer = 'Mrs. Peacock';
// return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// ANSWER: 
//first verdict is mrs peacock as it's declares inside the function and run as part of the function
//second verdict is prof plum as it's accessing global let murderer = on line 35

// Episode_4---------------------------------------------------------------------------------------------------------------------------------------
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
// let suspectThree = 'Colonel Mustard';
// return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// // ANSWER: 
//the function declareAllSuspects swithches suspectThree to the Colonel and returns the three
//console.log(`Suspect three is ${suspectThree}.`); will acess mrs peacock as declare hasn't been run

// Episode_5---------------------------------------------------------------------------------------------------------------------------------------
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// ANSWER: 
//the function to change the weapon is run first meaning declare weapon will result in revolver

// // Episode_6---------------------------------------------------------------------------------------------------------------------------------------
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
// murderer = 'Mr. Green';

// const plotTwist = function() {
//     murderer = 'Mrs. White';
// }

// plotTwist();
// }

// const declareMurderer = function () {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ANSWER: I said green, brackets made it difficult to tell

// Episode_7---------------------------------------------------------------------------------------------------------------------------------------
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mr. Green';

// const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//     murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
// }

// plotTwist();
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ANSWER: Miss scarlet change murderer is run and then plot twist is run inside change but within plot twist unexpected Outcome sets it to scarlett
// I was wrong and cannnot figure out why :'(

// // Episode_8---------------------------------------------------------------------------------------------------------------------------------------
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//     if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//         }
//     }

//     unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// ANSWER: Got it wrong again, didn't think weapon changed not sure why it did

// Episode_9---------------------------------------------------------------------------------------------------------------------------------------
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
// let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// ANSWER: 
// dont think the if statement can run so I'll guess plum