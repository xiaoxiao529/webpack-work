let htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
	mode: "production",
  entry: './src/index.js',  //入口文件的配置项
  output: {  //出口文件的配置项
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.js',
  },
  module: {//配置 loader  模块：例如解读CSS,图片如何转换，压缩
    rules: [//相关规则写在这里
      {
        test: /\.js$/,//正则表达式：根据后缀为 .js 的文件来匹配 js 文件
        loader:'babel-loader'
      },
      {
      	test: /\.css$/,//正则表达式：根据后缀为 .css 的文件来匹配 css 文件
        loader:'style-loader!css-loader' //css-loader使得在js里面可以处理css文件，style-loader使得js处理完的样式插入到index.html页面中
      },
      {
      	test:/\.less$/,
      	loader:'style-loader!css-loader!less-loader' 
      },
      {
      	test:/\.(png|jpg|gif|svg)$/i,
				loader:[
					'url-loader?limit=20000&name=img/[hash].[ext]',
					'image-webpack-loader'
				]
      }
    ]
  },
  plugins:[
  	new htmlWebpackPlugin({
  		template:'./index.html'  //模板文件
  	})
  ],  //插件，用于生产模版和各项功能
  mode: 'development',  //打包模式，默认生产者模式,
  devServer:{} //配置webpack开发服务功能
};