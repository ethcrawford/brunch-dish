// See http://brunch.io for documentation.
exports.files = {
  javascripts: { joinTo: "js/app.js" },
  stylesheets: { joinTo: "css/app.css" }
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
