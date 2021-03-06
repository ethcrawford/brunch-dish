"use strict";

// See https://brunch.io/docs/getting-started for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/script.js': [
        /^app\//,
        /^vendor\//,
      ],
    },
    // Define compilation order (optional). The default order is alphabetical.
    order: {
      before: [
        // ,
      ],
      after: [
        /app\/common\.js/,
      ],
    },
  },
  stylesheets: {
    joinTo: {
      'css/style.css': [
        /^app\//,
        /^vendor\//,
      ],
    },
    order: {
      before: [
        // ,
      ],
      after: [
        // ,
      ],
    },
  },
};

// Simply merge all the scripts without wrapping them in modules.
exports.modules = {
  wrapper: false,
  definition: false,
};

exports.npm = {
  enabled: false,
};

exports.plugins = {
  // Sass uses LibSass. You might need a compiler for this.
  sass: {
    mode: 'native',
    precision: 8,
  },
};

exports.conventions = {
  ignored: [
    /\/_/,
    /vendor\/(node|j?ruby-.+|bundle)\//,
    /\.m(d|arkdown)$/,
  ],
  vendor: [
    /^node_modules\//,
  ],
};

// Simple static server without auto-reloading.
// Respond with 404 for unknown paths.
exports.server = {
  noPushState: true,
};

// See https://brunch.io/docs/troubleshooting.
// Prevent receiving an empty file in the output.
exports.watcher = {
  awaitWriteFinish: true,
  usePolling: true,
};

exports.hooks = {
  preCompile() {
    console.log('About to compile...');
    return Promise.resolve();
  },
  onCompile(generatedFiles, changedAssets) {
    console.log('Done.');
  },
};
