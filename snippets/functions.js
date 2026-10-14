// Function declaration: hoisted, binds `add` in the enclosing scope.
function add(a, b = 1) {
    return a + b;
}

// Anonymous function expression assigned to a variable.
const sub = function (a, b) {
    return a - b;
};

// Named function expression: `fact` is only visible inside its own body.
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};

// Arrow functions: expression body vs block body, rest and destructured params.
const double = (x) => x * 2;
const sum = (...nums) => {
    let total = 0;
    for (const n of nums) total += n;
    return total;
};
const getName = ({ name }) => name;

// Called before its declaration below: works because of hoisting.
hoisted();
function hoisted() {}
