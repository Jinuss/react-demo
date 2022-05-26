import add from './add'
const { expect } = require('@jest/globals');
test('adds 1,2 = 3', () => {
    console.log('test add')
    expect(add(2, 2)).toBe(4);
})

test('null', () => {
    const n = null;
    console.log('test null')
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});
function throwErrors() {
    throw new Error('oooo')
}
test('throw one error', () => {
    console.log('test error')
    expect(() => throwErrors()).toThrow(/o/g)
})

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
    console.log('start?')
    beforeAll(() => console.log('2 - beforeAll'));
    afterAll(() => console.log('2 - afterAll'));
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));
    test('', () => console.log('2 - test'));
    describe('inner describe', () => {
        beforeAll(() => console.log('3 - beforeAll'));
        afterAll(() => console.log('3 - afterAll'));
        beforeEach(() => console.log('3 - beforeEach'));
        afterEach(() => console.log('3 - afterEach'));
        test('', () => console.log('3 - test'));
    })
});
console.log('end?')