const generate = ({ minFactor = 1, maxFactor = 1 }) => {
  const isPalindrome = d => +`${d}`.split('').reverse().join('') === d;
  let [smallP, largeP] = [Infinity, -Infinity];
  const prods = {};

  for (let i = minFactor; i < maxFactor; i += 1) {
    for (let j = i; j <= maxFactor; j += 1) {
      const prd = i * j;
      if (isPalindrome(prd)) {
        largeP = Math.max(prd, largeP);
        smallP = Math.min(prd, smallP);
        prods[prd] = [i, j];
      }
    }
  }

  return {
    largest: { value: largeP, factors: prods[largeP] },
    smallest: { value: smallP, factors: prods[smallP] },
  };
};

export default generate;
