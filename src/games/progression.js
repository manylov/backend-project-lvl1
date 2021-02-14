import game from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getRandomInt = (limit) => Math.round(Math.random() * limit);

const getProgression = (initialValue, answer, length, hideIndex) => ({
  progression: Array(length).fill('').map((_, index) => (index === hideIndex ? '..' : initialValue + answer * index)).join(' '),
  answer: initialValue + answer * hideIndex,
});

const getQuestion = () => {
  const coeff = getRandomInt(10) + 1;

  const initialValue = getRandomInt(20);
  const progressionLength = getRandomInt(5) + 5;
  const hideIndex = getRandomInt(progressionLength);
  const { progression: question, answer } = getProgression(
    initialValue,
    coeff,
    progressionLength,
    hideIndex,
  );

  return {
    question,
    answer: answer.toString(),
  };
};

export default () => game(task, getQuestion);
