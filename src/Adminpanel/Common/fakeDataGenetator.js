export const fakeArrayGenrator = ({ length, digit }) => {
  const array = [];
  for (let index = 1; index < length; index++) {
    const element = Math.round(Math.random() * digit);
    array.push(element);
  }
  return array;
};
