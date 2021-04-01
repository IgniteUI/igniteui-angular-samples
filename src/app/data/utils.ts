/**
 * Generates a random number in range [start, end];
 *
 * @param start lower range (inclusive)
 * @param end upper range (inclusive)
 */

const generateRandomInteger = (start: number, end: number) => Math.floor(Math.random() * (end - start + 1)) + start;
const generateRandomFloat = (start: number, end: number) => Math.random() * (end - start) + start;

export { generateRandomInteger, generateRandomFloat };
