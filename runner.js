var sum = require('./sum');
var testSum = require('./testSum');

for (testFunc in testSum) {
    console.log('Running test: ', testFunc);    
    testSum[testFunc](sum);
}