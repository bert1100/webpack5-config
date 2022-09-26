const path = require('path');
let mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production";
}
module.exports = {
    mode: mode,
    target: 'web', // 默认为 'web'，其他有node
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'assets/'),
        filename: '[name].js',
        clean:true,
        asyncChunks: true, // 创建按需加载的异步 chunk。
        environment:{
            arrowFunction: false,  // 禁止默认输出箭头函数
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot:true
    },
};
