"use strict";

const { src, dest } = require("gulp");
const postcss = require("gulp-postcss");
const flexbugs = require("postcss-flexbugs-fixes");
const autoprefixer = require("autoprefixer");
const del = require("del");

function doNothing(cb) {
  cb();
}

function prefix() {
  const plugins = [flexbugs(), autoprefixer()];
  return src("public/css/*.css")
    .pipe(postcss(plugins))
    .pipe(dest("public/css/"));
}

function cleanPublic() {
  return del(["public/**/*"]);
}

exports.prefix = prefix;
exports.clean = cleanPublic;
exports.default = doNothing;
