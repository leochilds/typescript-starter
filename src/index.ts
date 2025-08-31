import logger from './utils/logger';

const symmetricDifference = (arrA: number[], arrB: number[]): number[] => {
  const setA = new Set(arrA);
  const setB = new Set(arrB);
  const diff = [
    ...arrA.filter((num) => !setB.has(num)),
    ...arrB.filter((num) => !setA.has(num)),
  ];
  return [...new Set(diff)];
};

export const sym = (...arrays: number[][]): number[] => {
  logger.info(`Ran sym on ${JSON.stringify(arrays)}`);
  return arrays.reduce(symmetricDifference).sort((a, b) => a - b);
};
