// See http://brunch.io for documentation.
exports.files = {
  javascripts: { joinTo: "app.js" },
  stylesheets: { joinTo: "app.css" }
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
