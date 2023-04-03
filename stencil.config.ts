import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-custom-elements-watch-bug',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'index.html',
          dest: '../index.html',
        },
        {
          src: 'web-component.html',
          dest: '../web-component.html',
        },
        {
          src: 'dist.html',
          dest: '../dist.html',
        }
      ]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  minifyJs: false
};
