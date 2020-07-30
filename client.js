/* 
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left) 

*/




const net = require('net');
const { stdin } = require('process');
const {serverConfig} = require('./constants')

const connect = () => {
    const client = net.createConnection(serverConfig);
    // interpret incoming data as text
    client.setEncoding('utf8');

    // event handle for receiving incoming message from server
    client.on('data', (message) => {
      console.log(message);
    }); 

    // Events: connect, message, error, end

    client.on('connect', function () {
        console.log('Succesfully connected to server');
        //client.write("Name: NCB");
    });

    return client;
  }


module.exports = {connect};



/* 

*/


  /*  ///Hard coded fuctionality////
        let moveList = ["Move: up", "Move: right","Move: up", "Move: up"]
        
        for(let i = 0; i < moveList.length; i++){

            setTimeout(() => {
                client.write(moveList[i]);  
            }, 250*i) 
        
} */