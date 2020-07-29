const net = require('net');

const connect = () => {
    const client = net.createConnection({ 
      host: 'localhost',
      port: 50541
    });
    // interpret incoming data as text
    client.setEncoding('utf8');
    
    
    
    // event handle for receiving incoming message from server
    client.on('data', (message) => {
      console.log(message);
    });

    // Events: connect, message, error, end
    client.on('connect', function () {
        console.log('Succesfully connected to server');

        client.write("Name: NCB");
  });
    return client;
  }


module.exports = connect;