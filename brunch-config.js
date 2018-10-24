// See https://brunch.io/docs/getting-started for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^app/,
      'js/vendor.js': /^vendor/
    },
    // Define compilation order (optional). The default order is alphabetical.
    // App and vendor source will be placed in different files.
    order: {
      before: [
        'vendor/js/jquery-3.3.1.min.js',
        'vendor/js/popper-1.14.3.min.js',
        'vendor/js/bootstrap-4.1.3.min.js'
      ],
      after: ['app/common.js']
    }
  },
  stylesheets: {
    joinTo: {
      'css/app.css': /^app/,
      'css/vendor.css': /^vendor/
    },
    order: {
      before: [
        'vendor/css/bootstrap-4.1.3.min.css',
        'vendor/css/font-awesome-4.7.0.min.css'
      ],
      after: ['app/css/main.css']
    }
  }
};

// Simply merge all the scripts without wrapping them in modules.
exports.modules = {
  wrapper: false,
  definition: false
};

exports.npm = {
  enabled: false
};

exports.conventions = {
  ignored: [
    /\/_/,
    /vendor\/(node|j?ruby-.+|bundle)\//,
    /\.m(d|arkdown)$/
  ],
  // The following files will be simply copied to the public directory.
  assets: [
    /assets\//,
    /views\//
  ],
  vendor: [
    /(^bower_components|node_modules|vendor)\//
  ]
};

// Simple static server without auto-reloading.
// Respond with 404 for unknown paths.
exports.server = {
  noPushState: true
};

// See https://brunch.io/docs/troubleshooting.
// Prevent receiving an empty file in the output.
exports.watcher = {
  awaitWriteFinish: true,
  usePolling: true
};

exports.hooks = {
  preCompile() {
    console.log('About to compile...');
    return Promise.resolve();
  },
  onCompile(generatedFiles, changedAssets) {
    console.log('Done.');
  }
};
