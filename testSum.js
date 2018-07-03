var assert = require('assert');

module.exports.testSum =  function (sum) {
    var answer = sum(4, 5);
    assert(answer === 9, '4 and 5 is not 9');
}

module.exports.testConcat =  function (sum) {
    var answer = sum('Mark', 'Test');
    assert(answer === 'MarkTest', 'Mark + Test = MarkTest');
}