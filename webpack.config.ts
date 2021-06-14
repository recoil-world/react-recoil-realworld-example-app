import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import path from 'path';
interface WebpackConfig extends webpack.Configuration {
  devServer?: webpackDevServer.Configuration;
}

const webpackConfig: WebpackConfig = {
  mode: 'development',
  entry: path.resolve('src', 'index.tsx'),
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve('dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { useBuiltIns: 'usage', corejs: { version: 3, proposals: true } },
              ],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /(\.png|\.jpe?g|\.svg)/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', 'index.html'),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ],
  devServer: {
    contentBase: path.resolve('public'),
    compress: true,
    hot: true,
    historyApiFallback: true,
    open: true,
    // localhost Refused to connect
    // https://github.com/webpack/webpack-dev-server/issues/1347#issuecomment-407008054
    useLocalIp: true,
    host: '0.0.0.0',
  },
};

export default webpackConfig;
