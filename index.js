#!/usr/bin/env node
const patternBuilder = require("./pattern-builder");
const codeBinding = require("./code-binding");
const program = require("commander");
program.version('0.0.1', '-v, --vers', 'output the current version');
program
.command("pattern")
.alias("p")
.description("Starts an EventBridge pattern builder")
.action(async () => {
  await patternBuilder.buildPattern();
});
// Commenting this out sinc ethere seems to be an SDK bug with getting code bindings 
//
// program
// .command("code-bindings")
// .alias("c")
// .description("Get code bindinng for a schema")
// .action(async () => {
//   await codeBinding.browse();
// });

program.parse(process.argv);

  