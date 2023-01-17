const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const GLOBAL_STYLE_REGEXP = /\.global\.(sa|sc|c)ss/;




module.exports = {
  target:'node',
  mode: NODE_ENV ? NODE_ENV :'development',
  entry:path.resolve(__dirname, '../src/server/server.js'),
  output:{
    path:path.resolve(__dirname, '../dist/server'),
    filename:'server.js'
  },
  resolve:{
    // modules: ['node_modules'],
    extensions:[
      '.js', '.jsx', '.ts', '.tsx', '.json'
    ],
    plugins: [new TsconfigPathsPlugin()],
  },
  externals:[nodeExternals()],
  module:{
    rules:[
      {
        test:/\.[tj]sx?$/,
        use:[{
          loader: 'ts-loader',
          options: {}
        }]
      },
      { 
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true,
              },
            }
          },
          'sass-loader'
        ],
        exclude: GLOBAL_STYLE_REGEXP
      },
      {
        test: GLOBAL_STYLE_REGEXP,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|woff|woff2|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name][ext]'
        }
        
      },
      {
        test: /\.svg$/,
        // type: 'asset/inline',
        use: [ {
          loader: 'svg-sprite-loader',

        }]

      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(webm)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[name][ext]'
        }
      }
    
    ]
  },
  optimization: {
    minimize: false
  },

}