import game from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const question = () => {
  const NUM = Math.round(Math.random() * 100);
  const CORRECT_ANSWER = NUM % 2 !== 0 ? 'no' : 'yes';
  return {
    question: NUM,
    answer: CORRECT_ANSWER,
  };
};

export default () => game(task, question);
