var x = "outer var";
let y = "outer let";

{
    // `var` ignores blocks: this is the same `x` as above.
    var x = "same x";
    // `let` creates a new binding that shadows the outer `y`.
    let y = "shadowed y";
    const z = 1;
}

// Each loop iteration gets its own `i` with `let`.
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
}

// The catch parameter is scoped to the catch block.
try {
    JSON.parse("{");
} catch (err) {
    console.log(err.message);
}

// Optional catch binding: no parameter at all.
try {
    risky();
} catch {
    // ignored
}

// Switch cases share a single block scope.
switch (y) {
    case "a": {
        let msg = "braces give this case its own scope";
        break;
    }
    default:
        let other = "lives in the switch's scope";
}
