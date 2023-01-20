import { BaseNumeralSystem as Base } from 'base-numeral-system'

class IpToBase {
  constructor(ip, base) {
    this.ip = ip
    this.base = base
  }

  convert() {
    let result = this.ip.split('.').map(octet => {
      let output = new Base().from(10).to(2).convert(octet)
      output = ('000000000' + output).substr(-8)
      return output
    })

    result = result.join('')

    if (this.base != 2) {
      result = new Base().from(2).to(this.base).convert(result)
    }

    return result
  }
}

class BaseToIp {
  constructor(ip, base) {
    this.ip = ip
    this.base = base
    this.converter = new Base()
  }

  convert() {
    const binary = this.converter.from(this.base).to(2).convert(this.ip)
    const chunks = []

    for (let i = binary.length; i > 0; i -= 8) {
        const octet = binary.substring(i, i - 8)
        chunks.push(new Base().from(2).to(10).convert(octet))
    }

    return chunks.reverse().join('.')
  }
}

export { IpToBase, BaseToIp }
