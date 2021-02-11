const {connect} = require('./client')

const {setupInput} = require('./input')

// function(conn) { 
//     const stdin = process.stdin;
//     stdin.setRawMode(true);
//     stdin.setEncoding('utf8');
//     stdin.resume();
//     stdin.on('data', handleUserInput)
//     return stdin;
//   }
console.log('Connecting ...');
setupInput(connect())
