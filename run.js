const { JSDOM } = require("jsdom");
const dom = new JSDOM(process.argv[2]);
const $ = require("jquery")(dom.window);

console.log(eval(process.argv[3]));
