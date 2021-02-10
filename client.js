const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log("touchdown in the game server");
  })
  conn.on("connect", () => {
    conn.write('Name: RY');
    conn.write("Move: up")
  
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = {connect};