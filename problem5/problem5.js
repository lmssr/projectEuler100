function smallestMult(n) {
    let num = [];
    for (let i = 1; i <= n; i ++){
        num.push(i);
    }

    let result = n;
    let count = 0;

    while (count < n){
        for (let j = 0; j < num.length; j++){
            if (result % num[j] === 0){
                count += 1;
            }
            else {
                count = 0;
                result += n;
            }
        }
    }
    return result;
}

