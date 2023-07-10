const client = require("../config/mqtt");

var sensorData = [];

client.on("newMessage", (message) => {
    sensorData = [...sensorData.slice(-4), message];
});

const sendReadings = (req, res, next) => {
    try {
        if (sensorData.length) res.json({ data: sensorData });
        else res.status(200).json({ data: null });
    } catch (error) {
        next(error);
    }
};

module.exports = { sendReadings };