import game from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getRandomInt = (limit) => Math.round(Math.random() * limit);

const gcd = function (a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const question = () => {
  const NUM1 = getRandomInt(100);
  const NUM2 = getRandomInt(100);
  const ANSWER = gcd(NUM1, NUM2);

  return {
    question: `${NUM1} ${NUM2}`,
    answer: ANSWER.toString(),
  };
};

export default () => game(task, question);
