## Base64

There is no magic, just a hipster-way approach to base64'ing in Node.js using it's built-in Buffer object.. :sunglasses:

## Install

```sh
$~ npm install qeremy-base64
```

## Usage

```js
var base64 = require("qeremy-base64");

var s = "Hello, world!";
console.log(base64.encode(s));
console.log(base64.decode(base64.encode(s)));
```

## License

The MIT License
