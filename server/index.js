const express = require("express");
const app = express();
var cors = require("cors");
var SerialPort = require("serialport");

var port = 3000;

var arduinoCOMPort = "COM4";

var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
    baudRate: 9600
});

app.use(cors());

arduinoSerialPort.on("open", function() {
    console.log("Serial Port " + arduinoCOMPort + " is opened.");
});

app.get("/", function(req, res) {
    return res.send("Working");
});

app.get("/:action", function(req, res) {
    var action = req.params.action || req.param("action");

    if (action == "true") {
        arduinoSerialPort.write("t");
        return res.status(200).send({ res: "Led light is on!" });
    }
    if (action == "false") {
        arduinoSerialPort.write("f");
        return res.status(200).send({ res: "Led light is off!" });
    }

    return res.send("Action: " + action);
});

app.listen(port, function() {
    console.log("Example app listening on port http://localhost:" + port);
});