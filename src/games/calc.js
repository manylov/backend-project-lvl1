import game from '../index.js';

const task = 'What is the result of the expression?';

const PLUS = '+';
const MINUS = '-';
const MULTI = '*';

const GET_OPERATION = (num1, num2) => {
  const OPERATION_RND = Math.round(Math.random() * 9);
  switch (true) {
    case OPERATION_RND <= 3:
      return { OP: PLUS, ANSWER: num1 + num2 };
    case OPERATION_RND <= 6:
      return { OP: MINUS, ANSWER: num1 - num2 };
    default:
      return { OP: MULTI, ANSWER: num1 * num2 };
  }
};

const question = () => {
  const NUM1 = Math.round(Math.random() * 10);
  const NUM2 = Math.round(Math.random() * 10);
  const { OP, ANSWER } = GET_OPERATION(NUM1, NUM2);

  return {
    question: `${NUM1} ${OP} ${NUM2}`,
    answer: ANSWER.toString(),
  };
};

export default () => game(task, question);
