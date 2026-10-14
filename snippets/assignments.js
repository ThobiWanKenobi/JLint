// Which of these are reads, writes, or both? (Needed for prefer-const and no-unused-vars.)
let counter = 0;
counter = 1; // write only
counter += 1; // read + write
counter++; // read + write
console.log(counter); // read

// Mutating a property is a read of `config`, not a reassignment.
const config = {};
config.debug = true;
config["level"] = 2;

// Only assigned, never read: unused per ESLint's no-unused-vars.
let neverRead;
neverRead = 5;

// Assigned once after declaration: prefer-const still flags this.
let lateInit;
lateInit = "set once";
console.log(lateInit);

// Assignment to a name that was never declared (implicit global, no-undef).
undeclared = 10;
