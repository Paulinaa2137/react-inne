// import { hasPairWithSum } from '../problem_1.js';
const hasPairWithSum = require('./problem_1');

let emptyArray = [];
let arrayWithOnlyOneNumber = [4];
let sortedArray = [1, 2, 4, 4];
let sortedArrayWithoutSolution = [1, 2, 3, 9];
let sortedArray2 = [1, 2, 4, 4, 5, 6, 6, 6];
let nonSortedArray = [5, 4, 3, 5, 3, 2, 1, 4, 4];
let nonSortedArray2 = [1, 1, 1, 1, 1, 1, 8, 6, 4, 5, 4, 1, 10, 10, 10];
let nonSortedArray3 = [2, 1, 5, 7];
let arrayWithNegativeNumbers = [-1, -2, -3, 10];

let expectedSum = 8;
let expectedSum2 = 6;

test('Check 1:', () => {
	expect(hasPairWithSum(sortedArray, expectedSum)).toBe(true);
});

test('Check 2:', () => {
	expect(hasPairWithSum(sortedArrayWithoutSolution, expectedSum)).toBe(false);
});

test('Check 3:', () => {
	expect(hasPairWithSum(sortedArray2, expectedSum)).toBe(true);
});

test('Check 4:', () => {
	expect(hasPairWithSum(nonSortedArray, expectedSum)).toBe(true);
});

test('Check 5:', () => {
	expect(hasPairWithSum(nonSortedArray2, expectedSum)).toBe(true);
});

test('Check 6:', () => {
	expect(hasPairWithSum(arrayWithOnlyOneNumber, expectedSum)).toBe(false);
});

test('Check 7:', () => {
	expect(hasPairWithSum(emptyArray, expectedSum)).toBe(false);
});

test('Check 8:', () => {
	expect(hasPairWithSum(nonSortedArray3, expectedSum)).toBe(true);
});

test('Check 9:', () => {
	expect(hasPairWithSum(arrayWithNegativeNumbers, expectedSum)).toBe(true);
});

test('Check 10:', () => {
	expect(hasPairWithSum(nonSortedArray2, expectedSum2)).toBe(true);
});