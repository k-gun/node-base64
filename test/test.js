var base64 = require("../src/base64.js");

var s = "Hello, world!";
console.log(base64.encode(s));
console.log(base64.decode(base64.encode(s)));
