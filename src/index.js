import input from './cli.js';

const game = (task, getQuestion) => {
  console.log('Welcome to the Brain Games!');

  const NAME = input('May I have your name? ');

  console.log(`Hello, ${NAME}`);

  console.log(task);

  let wins = 0;
  let wrongAnswer = false;

  while (wins < 3 && !wrongAnswer) {
    const { question, answer } = getQuestion();
    console.log(`Question: ${question}`);
    const ANSWER = input('Your answer: ');
    if (ANSWER !== answer) {
      console.log(
        `'${ANSWER}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log("Let's try again, Bill!");
      wrongAnswer = true;
    } else {
      console.log('Correct!');
      wins += 1;
    }
  }

  if (!wrongAnswer) console.log(`Congratulations, ${NAME}!`);
};

export default game;
