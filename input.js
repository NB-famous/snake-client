const setupInput = () => {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
   
   // This will ensure that ^C works -> this is handleUserInput 
   stdin.on('data', handleUserInput = (key) => {
       if (key === '\u0003') {
           process.exit();
         }
   });
   
    return stdin;
}

module.exports = {setupInput};

