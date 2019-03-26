const { JSDOM } = require("jsdom");
const fs = require("fs");
const stdinBuffer = fs.readFileSync(0);
const dom = new JSDOM(stdinBuffer.toString());
const $ = require("jquery")(dom.window);

console.log(eval(process.argv[2]));
