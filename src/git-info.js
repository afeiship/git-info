(function () {

  var exec = require('child_process').execSync;
  var spaceRE = /[\s\r\n]+$/;
  var EMPTY_STR = '';

  var execCmd = function(inCmd){
    var result = EMPTY_STR + exec(inCmd);
    return result.replace(spaceRE, EMPTY_STR);
  };

  function branch() {
    return execCmd('git branch');
  }

  function currentBranch(){
    return execCmd('git rev-parse --abbrev-ref HEAD');
  }

  function hash(){
    return execCmd('git rev-parse --verify HEAD');
  }

  module.exports = {
    branch: branch,
    currentBranch: currentBranch,
    hash: hash
  };

}());
