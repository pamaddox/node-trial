var Trial = require('trial').Trial;

var trial = new Trial();
trial.load(__dirname + "/t5");
trial.on('load', function() { trial.run(); });
trial.exit();
