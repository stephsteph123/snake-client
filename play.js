const net = require("net");
const { Stream } = require("stream");
const {host, port} = require("./client.js");
const connect = require("./play")

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  conn.on('connect', listener: () => )

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };

};

console.log("Connecting ...");
connect();