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
      before: ["vendor/jquery/jquery-3.3.1.min.js"],
      after: ["app/common.js"]
    }
  },
  stylesheets: {
    joinTo: {
      "css/app.css": /^app/,
      "css/vendor.css": /^vendor/
    },
    order: {
      before: [
        "vendor/bootstrap/bootstrap-reboot-4.1.3.min.css",
        "vendor/bootstrap/bootstrap-grid-4.1.3.min.css"
      ],
      after: ["app/sass/main.sass"]
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
  },
  postcss: {
    processors: [
      require("autoprefixer")([
        ">1%",
        "last 4 versions",
        "Firefox ESR",
        "not ie < 9"
      ])
    ]
  }
};

exports.modules = {
  wrapper: false,
  definition: false
};

exports.npm = {
  enabled: false
};

exports.hooks = {
  preCompile() {
    console.log("About to compile...");
    return Promise.resolve();
  },
  onCompile(generatedFiles, changedAssets) {
    console.log("Done.");
  }
};
