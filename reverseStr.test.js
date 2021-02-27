const { TestScheduler } = require("jest");
const revStr = require("./reverseStr");

const revString = require('./reverseStr')

test('revstr function should exist', () => {
    expect(revStr).toBeDefined();
})

test('should give reverse string', () => {
    expect(revStr('hello')).toEqual('olleh');
})