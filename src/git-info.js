(function () {

  var exec = require('child_process').exec;

  function branch(){
    return exec('git brach');
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      branch:branch
    };
  }

}());
