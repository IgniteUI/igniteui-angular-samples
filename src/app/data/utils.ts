/**
 * Generates a random number in range [start, end];
 * @param start lower range (inclusive)
 * @param end upper range (inclusive)
 */
const generateRandomInteger = (start: number, end: number) => Math.floor(Math.random() * (end - start + 1)) + start;

export { generateRandomInteger };
