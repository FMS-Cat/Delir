import * as webpack from 'webpack'

module.exports = {
    target: 'node',
    entry: {
        index: './src/index.ts',
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { transpileOnly: true },
            },
        ]
    }
    // plugins: [
    //     rollupJson(),
    //     rollupTypeScript({
    //         tsconfig: join(__dirname, 'tsconfig.json'),
    //     }),
    // ],
} as webpack.Configuration
