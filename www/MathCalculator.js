var exec = require('cordova/exec');

modules.exports.add = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'add', [arg0]);
};

modules.exports.substract = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'substract', [arg0]);
};
