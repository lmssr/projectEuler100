
function primeSummation(n) {
  let arr = [];
  for(let i = 2; i < n; i++) {
    for(let j = 2; j <= i; j++) {
      if(i===j){
        arr.push(i)
      }
      if(i%j===0) {
        break
      }
    }
  }
  return arr.reduce(function(x,y){return x+y})
}


primeSummation(2000000);



primeSummation(2000000);
