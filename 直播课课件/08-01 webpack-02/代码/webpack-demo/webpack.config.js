const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {

    mode: 'development',
    // mode: 'production',

    // map : 映射
    devtool: 'source-map',

    entry: {
        'index': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js'
    },

    module: {

        rules: [

            {
                test: /\.(png|jpg|gif)$/,
                use:{
                    loader: "url-loader",
                    options: {
                        // placeholder 占位符 [name] 源资源模块的名称
                        // [ext] 源资源模块的后缀
                        name: "[name]_[hash].[ext]",
                        //打包后的存放位置
                        outputPath: "./images",
                        // 打包后文件的 url
                        publicPath: './images',
                        // 小于 100 字节转成 base64 格式
                        limit: 100
                      }
                }
            },

            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            sourceMap: true
                        }
                    }
                ]
            }

        ]

    },

    plugins: [
        new HtmlWebpackPlugin({
            title: '欢迎来到开课吧',
            template: './template/index.html',
            // filename 输出的目录相对于output中的path
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        })
    ],

    devServer: {
        contentBase: "./public",
        port: 8081,

        // 开启热更新
        hot:true,
        // 即使 HMR 不生效，也不去刷新整个页面(选择开启)
        hotOnly:true,

        proxy: {
            '/api': {
                target: 'http://localhost:9999',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}