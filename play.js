const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const client = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  client.setEncoding('utf8'); 
  
  // event handle for receiving incoming message from server
  client.on('data', function (message) {
    console.log(message);
  });
  return client;
}




console.log('Connecting ...');
connect();