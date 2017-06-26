(function () {

  var exec = require('child_process').exec;

  function branch(){
    return exec('git brach');
  }

  module.exports = {
    branch:branch
  };

}());
