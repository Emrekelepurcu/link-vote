const path = require('path');

module.exports = {
  lintOnSave: true,
	configureWebpack: {
    resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				"@constant": path.resolve(__dirname, 'src/constant/'),
				"@layout": path.resolve(__dirname, 'src/infrastructure/layout/'),
				"@kits": path.resolve(__dirname, 'src/app/ui-kits/'),
				"@utils": path.resolve(__dirname, 'src/utils/'),
				"@mixins": path.resolve(__dirname, 'src/mixins/'),
				"@views": path.resolve(__dirname, 'src/infrastructure/views/'),
				"@styles": path.resolve(__dirname, 'src/infrastructure/styles/'),
				"@icon": path.resolve(__dirname, 'src/assets/icons/')
			}
		}
  },
	css: {
		loaderOptions: {
			sass: {
					prependData: `@import "@/styles/_app.scss";`
			}
		}
	}
}
