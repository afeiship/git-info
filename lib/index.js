(function () {
  var exec = require("child_process").execSync;
  var fs = require("fs");
  var spaceRE = /[\s\r\n]+$/;
  var EMPTY_STR = "";
  var GIT_HEAD = ".git/HEAD";

  var execCmd = function (inCmd) {
    if (!fs.existsSync(GIT_HEAD)) return "NO_GIT_EXIST";
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

  function url() {
    return execCmd("git config --get remote.origin.url");
  }

  function get() {
    return {
      branch: branch(),
      currentBranch: currentBranch(),
      hash: hash(),
      shortHash: shortHash(),
      email: email(),
      username: username(),
      url: url(),
    };
  }

  module.exports = {
    branch: branch,
    currentBranch: currentBranch,
    hash: hash,
    shortHash: shortHash,
    email: email,
    username: username,
    url: url,
    exec: execCmd,
    get: get,
  };
})();
