const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
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