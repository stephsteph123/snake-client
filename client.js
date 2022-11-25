const connect = require("./play")

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
};

module.exports = connect