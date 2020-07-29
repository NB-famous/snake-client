
const connect = require('./client');
console.log('Connecting ...');

//console.log(connect);
connect();


// User Interface //
const setupInput = () => {
 const stdin = process.stdin;
 stdin.setRawMode(true);
 stdin.setEncoding('utf8');
 stdin.resume();

// This will ensure that ^C works
stdin.on('data', (key) => {
    if (key === '\u0003') {
        process.exit();
      }
});

 return stdin;
}