module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/hxd_amazon/'
    : '/',
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = "茴香豆";
				return args;
		})
	}
}