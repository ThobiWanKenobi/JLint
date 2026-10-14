// Object patterns: shorthand, renaming, defaults, nested, rest.
const { a, b: renamed, c = 3, nested: { deep }, ...others } = obj;

// Array patterns: holes, defaults, rest.
let [first, , third = 0, ...tail] = list;

// Destructuring *assignment* (not a declaration): swaps existing bindings.
[first, third] = [third, first];

// Parentheses are required, otherwise `{` starts a block statement.
({ a: first } = obj);
