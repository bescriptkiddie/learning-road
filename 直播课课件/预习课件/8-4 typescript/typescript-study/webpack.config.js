const path = require('path');

module.exports = {

    mode: 'development',

    entry: {
        'main': './src/main.ts'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            }
        ]
    }

}