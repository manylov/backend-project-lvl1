import game from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomInt = (limit) => Math.round(Math.random() * limit);

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const question = () => {
  const NUM = getRandomInt(100);
  const answer = isPrime(NUM) ? 'yes' : 'no';

  return {
    question: NUM,
    answer: answer.toString(),
  };
};

export default () => game(task, question);
