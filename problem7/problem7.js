
function nthPrime(n) {
  let primes = [2];

  for(let i = 3; primes.length <= n; i+= 2) {
    if(primes.every(elem => i % elem !== 0)) {
      primes.push(i);
      if(primes.length === n) return i;
    }
  }
}


console.log(nthPrime(10001));
