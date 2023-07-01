/* Return the length of the longest word in the provided sentence.
   Your response should be a number. */

function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map(str => str.length));
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
