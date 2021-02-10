const conn = net.createConnection({ 
    host: 'localhost', // change to IP address of computer or ngrok host if tunneling
    port: 3000 // or change to the ngrok port if tunneling
  });
  
  conn.setEncoding('utf8'); // interpret data as text

  const net = require('net');

const server = net.createServer();

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

console.log('Connecting ...');
connect();