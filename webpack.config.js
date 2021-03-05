
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: ['./src/index.js'],
  // devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: false,
      // The environment supports BigInt as literal (123n).
      bigIntLiteral: false,
      // The environment supports const and let for variable declarations.
      const: false,
      // The environment supports destructuring ('{ a, b } = obj').
      destructuring: false,
      // The environment supports an async import() function to import EcmaScript modules.
      dynamicImport: false,
      // The environment supports 'for of' iteration ('for (const x of array) { ... }').
      forOf: false,
      // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
      module: false,
    },
  },

  module: {
    rules: [
      // {
      //   test: /\.ts(x)?$/,
      //   loader: 'ts-loader',
      //   exclude: '/node_modules/'
      // },
      {
        test: /\.(ts|js)$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                  // extends: path.resolve(__dirname, './babel.config.js'),
                  presets: [
                    ['@babel/preset-env',
                    {
                      targets: {

                        browsers: '> 0.25%, IE 11, not dead',
       
                      }

                    }]

                  ],
                  
                  plugins: [
                    
                    
                    ['@babel/plugin-transform-runtime',
                    {
                    
                    
                    regenerator: true
                    
                    
                    }]
                    
                    
                    ]
                }
            }
        ],
        exclude: /node_modules\/(?!(lit-element|lit-html)\/).*/,
    }
    ]
    
  },
  resolve: {
    extensions: ['.tsx', '.ts','.js']
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
     new CopyPlugin ({
       patterns: [
         { from: 'assets', to: 'imagenes'}
       ]
    })
  ],
  mode: 'production',
};

module.exports = config;

/*
npm init -y
npm install --save-dev webpack webpack-cli
npm install            -dependencias

npm install lit-element
npm install --save-dev html-webpack-plugin          - pone el html auto en dist
npm install copy-webpack-plugin -D                  - copia a dist las carpetas que le digas
npm install --save-dev typescript ts-loader
npm install --save core-js

*/