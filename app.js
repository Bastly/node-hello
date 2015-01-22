var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "publisher"});

// pubber.js
var zmq = require('zmq')
  , sock = zmq.socket('pub');

log.info("executed publisher, waiting to sync with subscriber on sync");

sock.bindSync('tcp://'+ process.argv[2] +':3000');
log.info('Publisher bound to '+ process.argv[2] +': 3000');

setInterval(function(){
  log.info('sending a multipart message envelope');
  sock.send(['kitty cats', 'meow!']);
}, 1000);