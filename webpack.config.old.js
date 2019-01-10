let htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/index.js',  //入口文件的配置项
  output: {  //出口文件的配置项
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[hash].js',
    publicPath:'static'
  },
  module: {//配置 loader  模块：例如解读CSS,图片如何转换，压缩
    rules: [//相关规则写在这里
      {
        test: /\.css$/,//正则表达式：根据后缀为 .css 的文件来匹配 css 文件
        use: [//匹配搭配 css 文件后，打包时使用以下 loader 来处理文件
          { loader: 'style-loader' },//loader 名称
          {
            loader: 'css-loader',//loader 名称
            options: {
              modules: true
            }
          }
        ]
      },
      {
			  test: /\.(png|jpg|gif)$/i,
			  exclude: /(node_modules|bower_components)/,
			  use:[
			  {
			    loader: 'url-loader',
			    options: {
			      limit: 10000,
			      name: '[name].[ext]'
			    }
			  },
			    'image-webpack-loader', // 压缩图片
			  ]
			},
    ]
  },
  plugins:[
  	new htmlWebpackPlugin({
  		template:'index.html'
  	})
  ],  //插件，用于生产模版和各项功能
  mode: 'development',  //打包模式，默认生产者模式,
  devServer:{} //配置webpack开发服务功能
};