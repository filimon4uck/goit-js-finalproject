const multiplyByValue = (value, base, ...numbers) => {
  return numbers.map((number) => number * value + base);
};
console.log(multiplyByValue(2, 100, 1, 5, 20, 10));
