(function () {
  var exec = require("child_process").execSync;
  var spaceRE = /[\s\r\n]+$/;
  var EMPTY_STR = "";

  var execCmd = function (inCmd) {
    var result = EMPTY_STR + exec(inCmd);
    return result.replace(spaceRE, EMPTY_STR);
  };

  function branch() {
    return execCmd("git branch");
  }

  function currentBranch() {
    return execCmd("git rev-parse --abbrev-ref HEAD");
  }

  function hash() {
    return execCmd("git rev-parse --verify HEAD");
  }

  function shortHash() {
    return execCmd("git rev-parse --short HEAD");
  }

  function email() {
    return execCmd("git config user.email");
  }

  function username() {
    return execCmd("git config user.name");
  }

  function get() {
    return {
      branch: branch(),
      currentBranch: currentBranch(),
      hash: hash(),
      shortHash: shortHash(),
      email: email(),
      username: username(),
    };
  }

  module.exports = {
    branch: branch,
    currentBranch: currentBranch,
    hash: hash,
    shortHash: shortHash,
    email: email,
    username: username,
    exec: execCmd,
    get: get,
  };
})();
