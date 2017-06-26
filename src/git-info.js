(function () {

  var exec = require('child_process').execSync;
  var EMPTY_STR = '';
  var removeEmpty = function (inString) {
    return inString.replace(/[\s\r\n]+$/, EMPTY_STR);
  };

  function branch() {
    return removeEmpty(EMPTY_STR+exec('git branch'));
  }

  module.exports = {
    branch: branch
  };

}());
