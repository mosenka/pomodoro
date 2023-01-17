const path = require('path')
const {HotModuleReplacementPlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const GLOBAL_STYLE_REGEXP = /\.global\.(sa|sc|c)ss/;

function setupDevtool(){
  if(IS_DEV) return 'eval';
  if(IS_PROD) return false;
}
module.exports= {
 resolve:{
  //  modules: ['node_modules'],
   extensions:[
     '.js', '.jsx', '.ts', '.tsx', '.json'
   ],
     plugins: [new TsconfigPathsPlugin()],
 },
  mode:NODE_ENV ? NODE_ENV :'development',
  entry:
  [path.resolve(__dirname, '../src/client/index.jsx'),
  'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
],
  output:{
    path:path.resolve(__dirname, '../dist/client'),
    filename:'client.js',
    publicPath: '/static/',
  },
  module:{
    rules:[
      {
        test:/\.[tj]sx?$/,
        exclude: /node_modules/,
        use:[{
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({
              before: [IS_DEV && ReactRefreshTypeScript()].filter(Boolean),
            }),
            transpileOnly: IS_DEV,

          }

        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
					'style-loader', 
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]--[hash:base64:5]'
							}
						}
					},
          'sass-loader'
				],
        exclude: GLOBAL_STYLE_REGEXP
      },
      {
        test: GLOBAL_STYLE_REGEXP,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
  devtool:setupDevtool(),

  plugins:IS_DEV ? [
      new CleanWebpackPlugin(),
      new HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
      new SpriteLoaderPlugin({
        plainSprite: true,
              spriteAttrs: {
                  id: 'icons'
              }
      })
  ] :
  [],
}