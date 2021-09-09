const path = require('path');

function getPublicDir() {
    return path.join(__dirname, 'public');
}

module.exports = {
    mode: 'development',
    entry: "./src/app.js",
    output: {
        path: getPublicDir(),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test:/\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ]
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        liveReload: true
    }
};
