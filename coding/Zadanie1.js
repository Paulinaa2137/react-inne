let array = [1, 2, 4, 4];
function hasPairWithSum(numbers, sum) {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (numbers[i] + numbers[j] === sum) {
        return true;
      }
    }
  }
  return false;
}
console.log(hasPairWithSum(array, 8))
