var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "publisher"});

// pubber.js
var zmq = require('zmq')
  , sock = zmq.socket('pub');

sock.bindSync('tcp://127.0.0.1:3000');
log.info('Publisher bound to port 3000');

setInterval(function(){
  log.info('sending a multipart message envelope');
  sock.send(['kitty cats', 'meow!']);
}, 500);