import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';

const MAIN_INPUT = 'src/index.js';

const dependencies = pkg.dependencies ? Object.keys(pkg.dependencies) : [];
const peerDependencies = pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [];
const external = dependencies.concat(peerDependencies);
export default [
    // UMD build
    {
        input: MAIN_INPUT,
        output: {
            name: 'BigbomReactUI',
            file: pkg.browser,
            format: 'umd',
            exports: 'named',
            globals: {
                reakit: 'Reakit',
                react: 'React',
                'react-dom': 'ReactDOM'
            },
        },
        plugins: [
            scss({
                output: 'dist/' + pkg.name + '.css',
            }),
            babel({
                runtimeHelpers: true,
                exclude: ['node_modules/**'],
            }),
            resolve(),
            commonjs(),
        ],
    },

    // CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
    // `file` and `format` for each target)
    {
        input: MAIN_INPUT,
        output: {
            file: pkg.module,
            format: 'esm',
        },
        external,
        plugins: [
            scss({
                output: 'dist/' + pkg.name + '.css',
            }),
            babel({
                runtimeHelpers: true,
                exclude: ['node_modules/**'],
            }),
            resolve(),
        ],
    }
];