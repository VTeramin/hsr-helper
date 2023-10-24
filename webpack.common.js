const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                dependency: {
                    not: ["url"]
                },
                loader: "url-loader",
                type: "javascript/auto"
            }
        ]
    }
}