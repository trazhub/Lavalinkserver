require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTA3NTM0OTM1ODY1ODIxMTkyMg.G10KYN.0X6A4FU034K5l5p4AX5LOkMXu2ywAn5YdyPLKw",  // your bot token
    logs: process.env.LOGS || "1075349933785366569", // channel id for lavalink server status logs
    nodes: [
        {
            host: process.env.NODE_HOST || "192.34.63.211",
            identifier: process.env.NODE_ID || "Public node",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "trazhub",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}