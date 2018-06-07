"use strict";

module.exports = {
    context: __dirname + "/src/app/",
    entry: {
        app:"./app.components.ts",
    },
    output:{
        filename: "./app.components.js"
    },
    mode: 'none'
};