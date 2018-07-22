"use strict";

/**
  Configurations
  ============== */
var CONFIG = {
  components: { sourceDir: "./_components/", destDir: "./components/"},
  content: {sourceDir: "./_content/", destDir: "./content/"}
};


/**
  Requirements
  ============ */
var gulp = require("gulp");
var argv = require ("yargs").argv;
var print = require ("gulp-print");
var fs = require("fs");
var replace = require("gulp-replace");
var rename = require("gulp-rename");
// For Styles
var autoprefixer = require('gulp-autoprefixer');
var sass = require("gulp-sass");
// For Scripts
var concat = require('gulp-concat-util');
var babel = require("gulp-babel");
var modifyFile = require('gulp-modify-file');

var babel_preset_es2015 = require("./node_modules/babel-preset-es2015");
var babel_preset_react = require("./node_modules/babel-preset-react");



/**
  Helper Functions
 ================= */
var getTimeStamp = function () {
  return " [" + new Date ().toString ().split (" ") [4] + "]";
};


/**
  Compile
  =======
  Compile jsx & md files.
  */
gulp.task("compile", function () {
  var filesToWatch = [];

  var compileFiles = function (sourceDir, destDir) {
    gulp.src(sourceDir + "**/*.jsx")
    .pipe (babel ({presets: [babel_preset_es2015, babel_preset_react]}))
    .pipe (gulp.dest (destDir))
    .pipe (print (function (fileName) {
      console.log("Compiled JSX "+ fileName + getTimeStamp ());
    }));
  };

  // Compile Components & Content
  compileFiles (CONFIG.components.sourceDir, CONFIG.components.destDir);
  compileFiles (CONFIG.content.sourceDir, CONFIG.content.destDir);

  // Watch
  if (argv.watch) {
    filesToWatch.push (CONFIG.components.sourceDir + "**/*.jsx");
    filesToWatch.push (CONFIG.content.sourceDir + "**/*.jsx");
    gulp.watch (filesToWatch, function() {
      // Compile Components & Content
      compileFiles (CONFIG.components.sourceDir, CONFIG.components.destDir);
      compileFiles (CONFIG.content.sourceDir, CONFIG.content.destDir);
    });
  }
});
