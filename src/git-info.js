(function () {

  var exec = require('child_process').execSync;
  var spaceRE = /[\s\r\n]+$/;
  var EMPTY_STR = '';



  var removeEmpty = function (inString) {
    return inString.replace(spaceRE, EMPTY_STR);
  };

  function branch() {
    return removeEmpty(EMPTY_STR + exec('git branch'));
  }

  function currentBranch(){
    return removeEmpty(EMPTY_STR + exec('git rev-parse --abbrev-ref HEAD'));
  }

  function hash(){
    return removeEmpty( EMPTY_STR + exec('git rev-parse --verify HEAD'))
  }

  module.exports = {
    branch: branch,
    currentBranch: currentBranch,
    hash: hash
  };

}());
