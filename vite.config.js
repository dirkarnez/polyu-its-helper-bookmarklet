import { defineConfig } from 'vite'

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  base: "/polyu-its-helper-bookmarklet/dist/",
  build: {
    // Configure library mode
    lib: {
      entry: 'src/lib/index.ts', // Your main entry file
      name: 'MyLibrary', // The global variable name for UMD
      formats: ['umd'], // Specify UMD format
      fileName: (format) => `my-library.${format}.js`, // Output file name
    }
  }
}

console.log('Vite Configuration:', defineConfig.actualConfig); 

export default config
