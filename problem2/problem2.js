function fiboEvenSum(n) {
  // You can do it!
  const fibo = [1, 2];
  let i = 3;
  while (i <= n) {
    fibo.push(fibo[i-2] + fibo[i-3]);
    i++;
  }

  const result = fibo
    .filter((a) => a % 2 === 0)
    .reduce((a, b) => a + b);

  return result
}

fiboEvenSum(10);
