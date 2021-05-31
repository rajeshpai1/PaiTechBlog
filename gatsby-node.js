const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				apis: path.resolve(__dirname, 'src/apis'),
				components: path.resolve(__dirname, 'src/components'),
				images: path.resolve(__dirname, 'src/images'),
				metaData: path.resolve(__dirname, 'src/metaData'),
				styles: path.resolve(__dirname, 'src/styles'),
			},
		},
	});
};
