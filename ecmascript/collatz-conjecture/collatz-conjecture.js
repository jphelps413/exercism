
const steps = (n) => {
  if (n < 1) throw new Error('Only positive numbers are allowed')

  let count = 0

  while (n !== 1) {
    count += 1;
    n = (n%2 === 0) ? n/2 : n*3+1
  }

  return count;
};

export default steps;
