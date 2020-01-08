function largestPrimeFactor(number) {
  let prime = 2;

  while (prime<=number){
    if (number%prime == 0){
      number/=prime;
    } else{
        prime++;
    }
  }
  return prime
}

largestPrimeFactor(13195);
