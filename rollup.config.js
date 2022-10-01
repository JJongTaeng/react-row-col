import rollupPluginPeerDepsExternalModule from "rollup-plugin-peer-deps-external";
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const extensions = ['js', 'jsx', 'ts', 'tsx'];
const external = ['react', 'react-dom', 'styled-components'];

process.env.BABEL_ENV = 'production';

export default {
  input: 'packages/src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    }
  ],
  plugins: [
    rollupPluginPeerDepsExternalModule(),
    resolve({ extensions }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: 'node_modules/**',
    }),
    commonjs({
      include: /node_modules/
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: 'tsconfig.json'
    }),
    image(),
  ],
  external
}



