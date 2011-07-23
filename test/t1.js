var Test = require('trial').Test,
    Trial = require('trial').Trial;

var t1 = new Test(function() {
  this.succeed("success test");
}, { name: 'Hello', plan: 1 });

var trial = new Trial();
trial.add(t1);
trial.run();
trial.exit();
