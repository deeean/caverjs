import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { name, main, module } from './package.json';
import ttypescript from 'ttypescript';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es',
    sourcemap: false,
  },
  watch: {
    include: 'src/**',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      typescript: ttypescript,
      tsconfig: './tsconfig.json',
    }),
  ],
};
