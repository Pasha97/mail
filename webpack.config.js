// "use strict";
//
// module.exports = {
//     context: __dirname + "/src/app/",
//     entry: {
//         app:"./app.components.ts",
//     },
//     output:{
//         filename: "./app.components.js"
//     },
//     mode: 'none',
// };

const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    context: __dirname + "/src/app/",
    entry: "./app.components.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    resolve: {
        // These extensions count as modules
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
};