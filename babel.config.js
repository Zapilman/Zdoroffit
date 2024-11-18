module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		env: {
			production: {
				plugins: ['react-native-paper/babel'],
			},
		},
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src/'],
					alias: {
						// app: './src/app',
						screens: './src/screens',
						widgets: './src/widgets',
						features: './src/features',
						entities: './src/entities',
						shared: './src/shared',
						// assets: './src/assets',
					},
				},
			],
		],
	};
};
