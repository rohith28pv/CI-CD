const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./server');

test('adds 1 + 2 to equal 3', () => {
    assert.strictEqual(add(1, 2), 3);
});
