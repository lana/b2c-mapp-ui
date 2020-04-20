module.exports = {
	setupFiles: ['<rootDir>/setupTests.js'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less)$': 'identity-obj-proxy',
		'^react$': 'preact/compat',
		'^react-dom$': 'preact/compat',
		src: '<rootDir>/src/',
	},
	transform: {
		'^.+\\.jsx?$': './babel-jest.js',
	},
	moduleFileExtensions: ['js', 'jsx'],
	collectCoverage: true,
	collectCoverageFrom: ['src/(lists|navigation|buttons|forms|overlays|navigation|structure|typography|utils)/**/*.{js,jsx}'],
	verbose: true,
}
