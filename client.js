/* 
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left) 

*/


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
        
        
        
        /*  ///Hard coded fuctionality////
        let moveList = ["Move: up", "Move: right","Move: up", "Move: up"]
        
        for(let i = 0; i < moveList.length; i++){

            setTimeout(() => {
                client.write(moveList[i]);  
            }, 250*i) 
        
        } */
        

        

    });
    return client;
  }


module.exports = connect;



/* 
switch(message){
    case message === '^[[A':
        client.write('Move: up');
        break;
    case message === '^[[B':
        client.write('Move: down');
        break;
    case message === '^[[C':
        client.write('Move: rigth');
        break;
    case message === '^[[D':
        client.write('Move: left');
        break;
}  
*/