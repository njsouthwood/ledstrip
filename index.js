const Govee = require('node-govee-led');
global.Promise = require('bluebird');

const goveeData = require(`${process.env.HOME}/govee.json`);

const Client = new Govee(goveeData);

const main = () => {
    console.log('Client initialized with govee data: ', goveeData)

    Promise.resolve()
        // Turn on
        // .then(() => Client.turnOn())
        // Turn off
        // .then(() => Client.turnOff())
        // Set color
        .then(() => Client.setColor('#ff9933'))
        // Set brightness
        // .then(() => Client.setBrightness(50))
        // .then(() => sweepBrightness(Client))
        // Get device state
        // .then(() => Client.getState())
};



const sweepBrightness = (client) => {
    const arr = new Array(100);
    return Promise.mapSeries(arr, (_, i) => client.setBrightness(i + 1))
};

main();