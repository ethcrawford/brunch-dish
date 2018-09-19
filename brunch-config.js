// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      "js/app.js": /^app/,
      "js/vendor.js": /^vendor/
    },
    // Define compilation order (optional). The default order is alphabetical.
    // App and vendor source will be placed in different files.
    order: {
      before: [
        // "vendor/second.js"
      ],
      after: [
        // "vendor/first.js"
      ]
    }
  },
  stylesheets: {
    joinTo: {
      "css/app.css": /^app/,
      "css/vendor.css": /^vendor/
    },
    order: {
      before: [
        // "vendor/third.css"
      ],
      after: [
        // "app/first.sass"
      ]
    }
  }
};

exports.plugins = {
  pug: {
    pugRuntime: false
  },
  sass: {
    mode: "native",
    precision: 8
  }
};

exports.modules = {
  wrapper: false,
  definition: false
};

exports.npm = {
  enabled: false
};
