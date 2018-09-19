// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      "js/app.js": /^app/,
      "js/vendor.js": /^vendor/
    }
  },
  stylesheets: {
    joinTo: {
      "css/app.css": /^app/,
      "css/vendor.css": /^vendor/
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
