## Base64

There is no magic, just a :sunglasses:-way approach to base64'ing in Node.js using it's built-in Buffer object..

## Install

```sh
$~ npm install k-gun-base64
```

## Usage

```js
var base64 = require("k-gun-base64");

var s = "Hello, world!";
console.log(base64.encode(s));
console.log(base64.decode(base64.encode(s)));
```

## License

The MIT License
