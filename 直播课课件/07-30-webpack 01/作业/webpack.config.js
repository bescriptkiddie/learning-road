const path = require("path")

module.exports = {
    mode: "development",

    // 入口
    entry: {
        index: "./src/index.js",
    },

    // 输出
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "./images",
                        publicPath: "../dist/images",
                    },
                },
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            import: true,
                            sourceMap: false,
                        },
                    },
                ],
            },
        ],
    },
}
