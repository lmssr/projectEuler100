function sumSquareDifference(n) {
  const sum = (n * (n+1))/2
  const sumSquare = (n * (n+1) * (2*n+1))/6

  return (sum ** 2) - sumSquare;
}

sumSquareDifference(100);
