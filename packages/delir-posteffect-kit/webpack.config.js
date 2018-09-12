const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    entry: {
        index: './src/index.ts',
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs-module',
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { transpileOnly: true },
            },
        ],
    },
}
