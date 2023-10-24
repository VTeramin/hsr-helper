const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/template.html"
        })
    ]
})