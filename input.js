let connection;
// const handleUserInput = function(input){
//     if (input === '\u0003') {
//         process.exit()
//     }if (input === '\u0077') {
//         console.log("move: up")
//         conn.write("Move: up")
//     }
// }
const setupInput = function(conn) {
    connection = conn;
    const handleUserInput = function(input){
        if (input === '\u0003') {
            process.exit()
        }if (input === '\u0077') {
            console.log("move: up")
            conn.write("Move: up")
        }else if (input === '\u0061'){
            console.log("move left")
            conn.write("Move: left")
        }else if (input === '\u0064'){
            console.log("move right")
            conn.write("Move: right")
        }else if (input === '\u0073'){
            console.log("move down")
            conn.write("Move: down")
        }
    }
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput)
    return stdin;
  }

  module.exports = {setupInput}