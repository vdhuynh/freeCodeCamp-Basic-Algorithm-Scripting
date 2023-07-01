function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map(str => str.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


