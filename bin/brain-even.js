#!/usr/bin/env node

import input from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const NAME = input('May I have your name? ');

console.log(`Hello, ${NAME}`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let wins = 0;

while (wins < 3) {
  const NUM = Math.round(Math.random() * 100);
  const CORRECT_ANSWER = NUM % 2 !== 0 ? 'no' : 'yes';
  console.log(`Question: ${NUM}`);
  const ANSWER = input('Your answer: ');
  if (ANSWER !== CORRECT_ANSWER) {
    console.log(`'${ANSWER}' is wrong answer ;(. Correct answer was '${CORRECT_ANSWER}'.`);
    console.log("Let's try again, Bill!");
  } else {
    console.log('Correct!');
    wins += 1;
  }
}

console.log(`Congratulations, ${NAME}!`);
