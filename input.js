
const setupInput = (client) => {
    const stdin = process.stdin;
    //connection = conn
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();

    // stdin.on('data', getInput ); 
   
   // This will ensure that ^C works -> this is handleUserInput 
   stdin.on('data', handleUserInput = (key) => {
       if (key === '\u0003') {
           process.exit();
         }

        if (key === 'w'){
            client.write('Move: up');
        }
        else if (key === 's'){
            client.write('Move: down');
        }
        else if (key === 'd'){
            client.write('Move: right');
        }
        else if (key === 'a'){
            client.write('Move: left');
        }
        else if (key === 'q'){
            client.write('Say: HA!');
        }

   });
   
    return stdin;
}

module.exports = {setupInput};



////Code use for reference /////

//const {connect} = require('./client');
//let connection

/* const getInput = function(message) {
    //client.write(message);

    switch(message){
    case message === 'w':
        client.write('Move: up');
        break;
    case message === 's':
        client.write('Move: down');
        break;
    case message === 'd':
        client.write('Move: rigth');
        break;
    case message === 'a':
        client.write('Move: left');
        break;
    }
} */

