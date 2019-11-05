import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import path from 'path';

export default {
  input: {
    main: 'js/app.mjs',
  },
  output: {
    dir: 'build',
    format: 'esm',
    entryFileNames: '[name].mjs',
  },
  plugins: [
    nodeResolve({
        jsnext: true,
        main: true
    }),
    commonjs({
        // non-CommonJS modules will be ignored, but you can also
        // specifically include/exclude files
        include: 'node_modules/**',  // Default: undefined
        })
    ],
    manualChunks(id) {
        const hasId = id.includes('node_modules');
        if (hasId) {
            // Return the directory name following the last `node_modules`.
            // Usually this is the package, but it could also be the scope.
            const dirs = id.split(path.sep);
            return dirs[dirs.lastIndexOf('node_modules') + 1];
        }
    }
};
