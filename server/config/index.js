require('@babel/register')({
    ignore: [/(build|node_modules)/],
    presets: ['@babel/env', '@babel/preset-react'],
    plugins: [
        [
            '@babel/plugin-proposal-class-properties',
            { loose: true }
        ],
        '@babel/plugin-transform-flow-strip-types',
        'babel-plugin-dynamic-import-node',
        '@loadable/babel-plugin'
    ]
})

require('regenerator-runtime/runtime')



require('./server')
