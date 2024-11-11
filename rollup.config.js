import ts from '@rollup/plugin-typescript'

/** @type {import('rollup').RollupOptions} */
export default {
	input: 'src/index.ts',
	output: {
		file: './build/bundle.js',
		format: 'esm',
	},
    plugins: [
        ts({tsconfig: './tsconfig.json'}),
    ]
};