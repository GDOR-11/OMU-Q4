function f(c, p, b) { // computes (c^p) modulo b
    let ans = 1;
    for(let i = 0;i < power;i++) {
        ans *= c;
        ans %= b;
    }
    return ans;
}

// for the b you want, this code will output the expression of every possible value of c
// EX: b = 5
// 1 + 1 + a
// 4 + 4 + a
// 4 + 4 + a
// 1 + 1 + a
let b = 6;
for(let c = 1;c < b;c++)
    console.log(f(c, 2022, b) + ' + ' + f(c, 1010, b) + ' + a');

// make sure you disable the "group similar messages in console" configuration in the js console, otherwise the data may group into a single message
