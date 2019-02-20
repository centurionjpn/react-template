import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const src = path.resolve(__dirname, 'src');
const pub = path.resolve(__dirname, 'public');

export default {
  mode: 'development',
  entry: `${src}/index.jsx`,
  output: {
    path: pub,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: {}, useBuiltIns: 'usage' }],
            ['@babel/preset-react', { targets: {}, useBuiltIns: 'usage' }],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          { loader: '@svgr/webpack' },
          { loader: 'url-loader' },
        ],
      },
    ],
  },
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: pub,
    port: 9999,
  },
  // devtool: 'source-map',
};
