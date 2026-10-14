// CommonJS: parsed as a script, not a module. `require`, `module`, and
// `exports` are not declared here; Node provides them (relevant for no-undef).
const fs = require("fs");
const { join } = require("path");

function readConfig(dir) {
    return fs.readFileSync(join(dir, "config.json"), "utf8");
}

module.exports = { readConfig };
exports.version = "1.0.0";
