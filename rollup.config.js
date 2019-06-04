// Real definition in './config/rollup.config.ts'
// Uncomment to debug require-from in context.
// process.env.DEBUG_REQUIRE_FROM = "true";

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import {basename} from 'path';
import {chain as flatMap} from 'ramda';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const pkg  = require('./package.json');

export const outputs = p => flatMap(e => (e.file ? [e] : []),
    [
        {
            file: p.browser,
            sourcemapFile: `${basename(p.browser || '')}.map`,
            name: p.name,
            format: 'umd',
            sourcemap: true
        },
        {
            file: p.main,
            sourcemapFile: `${basename(p.main || '')}.map`,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: p.module,
            sourcemapFile: `${basename(p.modulex || '')}.map`,
            format: 'esm',
            sourcemap: true
        }
    ]);

const dbg = {name: 'dbg'};

['resolveId', 'load', 'transform', 'generateBundle'].forEach(
    f => dbg[f] = function (...args) {
        this.warn(`${f}: ${args.map(a => JSON.stringify(a, null, 2)).join(', ')}`);
        return null;}
);

export default {
    input: ['src/index.ts'],
    output: outputs(pkg),

    plugins: [
        // dbg,
        resolve(),
        typescript({
            include: "src/*.ts",
            objectHashIgnoreUnknownHack: true,
            verbosity: 1
        }),
        commonjs({
            extensions: [".js", ".ts"]
        }),
        terser({
            module: true
        }),
        {
            name: 'visualizer',
            ...visualizer({
                filename: "build/build-stats.html",
                title: "Build Stats"
            })
        }
    ]
}
