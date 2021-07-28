function sortScore(arr) {
  arr = arr.filter((el) => typeof el.score === 'number');
  arr.sort((a, b) => a.score - b.score).reverse();
  return arr.splice(0, 5);
}

export default sortScore;
