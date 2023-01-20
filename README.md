# ip-to-base - Convert IP address to its binary/decimal/hexadecimal/octal representation and vise versa

---

## Installation

```bash
# npm ..
$ npm install ip-to-base 
# yarn ..
$ yarn add ip-to-base
```

## Usage

This is a practical example of how to use.

```javascript
import { IpToBase, BaseToIp } from 'ip-to-base'

// convert ip address to binary
const result = new IpToBase('127.0.0.1', 2).convert()

console.log(result)
// 01111111000000000000000000000001

// convert binary to ip address
const result = new IpToBase('01111111000000000000000000000001', 2).convert()

console.log(result)
// 127.0.0.1
```

## Online converter

- [IP to Binary converter](https://tools.base64decode.net/ip-to-binary-converter)
- [IP to Decimal converter](https://tools.base64decode.net/ip-to-decimal-converter)
- [IP to Hexadecimal converter](https://tools.base64decode.net/ip-to-hex-converter)
- [IP to Octal converter](https://tools.base64decode.net/ip-to-octal-converter)
- [Binary to IP converter](https://tools.base64decode.net/binary-to-ip-converter)
- [Decimal to IP converter](https://tools.base64decode.net/decimal-to-ip-converter)
- [Hexadecimal to IP converter](https://tools.base64decode.net/hex-to-ip-converter)
- [Octal to IP converter](https://tools.base64decode.net/octal-to-ip-converter)
