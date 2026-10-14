// Every kind of import specifier.
import defaultThing from "./a.js";
import * as ns from "./b.js";
import { one, two as renamedTwo } from "./c.js";
import "./side-effect.js";

// Exported declarations.
export const answer = 42;
export function greet(name) {
    return `Hello, ${name}`;
}
export class Widget {}

// Export a local binding under another name.
const internal = renamedTwo + one;
export { internal as publicName };

// Re-exports: no local binding is created.
export { helper } from "./d.js";
export * from "./e.js";

// Default export of an expression.
export default defaultThing ?? ns;
