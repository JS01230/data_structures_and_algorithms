//Fibonacci Sequence

function fibonacci(n){
    if(n <= 1){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

//Examples
fibonacci(12) // => 144
fibonacci(6) // => 8
fibonacci(1) // => 1