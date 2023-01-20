import { expect } from 'chai'
import { IpToBase, BaseToIp } from '../src/ip-to-base.js'

describe('IpToBase', () => {
  const tests = [
    { input: { ip: '127.0.0.1', base: 2 }, expect: '01111111000000000000000000000001' },
    { input: { ip: '127.0.0.1', base: 8 }, expect: '17700000001' },
    { input: { ip: '127.0.0.1', base: 16 }, expect: '7f000001' },
    { input: { ip: '127.0.0.1', base: 10 }, expect: '2130706433' }
  ];

  function addTest(test) {
    it(`should pass, if ${JSON.stringify(test.input)} returns ${test.expect}`, () => {
      expect(new IpToBase(test.input.ip, test.input.base).convert()).to.equal(test.expect);
    });
  }

  tests.forEach(addTest)
})

describe('BaseToIp', () => {
  const tests = [
    { input: { ip: '01111111000000000000000000000001', base: 2 }, expect: '127.0.0.1' },
    { input: { ip: '17700000001', base: 8 }, expect: '127.0.0.1' },
    { input: { ip: '7f000001', base: 16 }, expect: '127.0.0.1' },
    { input: { ip: '2130706433', base: 10 }, expect: '127.0.0.1' }
  ];

  function addTest(test) {
    it(`should pass, if ${JSON.stringify(test.input)} returns ${test.expect}`, () => {
      expect(new BaseToIp(test.input.ip, test.input.base).convert()).to.equal(test.expect);
    });
  }

  tests.forEach(addTest)
})
