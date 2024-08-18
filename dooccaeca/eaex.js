const factorialCache = {};

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (factorialCache[n]) {
    return factorialCache[n];
  }

  factorialCache[n] = n * factorial(n - 1);
  return factorialCache[n];
}
