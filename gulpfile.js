"use strict";

const { src, dest } = require("gulp");
const postcss = require("gulp-postcss");
const flexbugs = require("postcss-flexbugs-fixes");
const autoprefixer = require("autoprefixer");

function prefix() {
  const plugins = [flexbugs(), autoprefixer()];
  return src("public/css/*.css")
    .pipe(postcss(plugins))
    .pipe(dest("public/css/"));
}

exports.prefix = prefix;
