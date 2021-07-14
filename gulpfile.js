/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { src, dest, series } = require("gulp");
const ts = require("gulp-typescript");
const del = require("del");
const env = require("gulp-env");
const nodemon = require("gulp-nodemon");
const eslint = require("gulp-eslint");
const JSON_FILES = ["src/*.json", "src/**/*.json"];
const PROTO_FILES = ["src/**/*.proto", "!./**/*.ts"];
const AVRO_FILES = ["src/**/*.avsc", "!./**/*.ts"];

// pull in the project Typescript config
const tsProject = ts.createProject("tsconfig.json");
const esLintProject = ts.createProject("eslintrc.json");

function clean() {
  return new Promise((resolve, reject) => {
    resolve(del(["dist"]));
  });

  function build(cb) {
    const tsResult = tsProject.src().pipe(tsProject());
    tsResult.js.pipe(dest("dist"));
    cb();
  }

  function assets(cb) {
    src(JSON_FILES).pipe(dest("dist"));
    cb();
  }

  function proto(cb) {
    src(PROTO_FILES).pipe(dest("dist"));
    cb();
  }

  function avro(cb) {
    src(AVRO_FILES).pipe(dest("dist"));
    cb();
  }

  function watchFiles() {
    env({
      file: ".env",
      type: "ini",
    });
    nodemon({
      watch: ["src/**/*.ts"],
      ext: "ts,js,json",
      ignore: [".git", "node_modules/**/nodemodules"],
      exec: "ts-node src/index.ts",
      verbose: true,
    });
  }

  function esLint() {
    return esLintProject
      .src()
      .pipe(eslint({ fix: true }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError);
  }
}

exports.clean = clean;
exports.build = series(esLint, build, assets, proto, avro);
exports.assets = assets;
exports.watch = series(esLint, build, proto, avro, watchFiles, assets);
exports.rebuild = series(esLint, clean, build, assets, proto, avro);
exports.default = series(
  esLintProject,
  clean,
  build,
  proto,
  avro,
  assets,
  watchFiles
);
