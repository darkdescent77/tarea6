function fibonacci(n){
    let sequence = [0, 1];
    for (let i = 2; i < n; i++){
        let prox = sequence[i - 1] + sequence[i - 2];
        sequence.push(prox);
    }
    return sequence;
}

var numfib = fibonacci(17);
console.log(numfib);
