var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('event1', function(m1, m2) {
  console.log(m1);
  console.log(m2);
})

emitter.emit('event1', 'hi', 'wry')