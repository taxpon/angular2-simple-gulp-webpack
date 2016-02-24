# Angular2 Simple Gulp Webpack

Simple Angular2 project pattern using gulp and webpack. This repository constructs the same application with [official's 5 MIN QUICKSTART](https://angular.io/docs/ts/latest/quickstart.html).  

## Getting started

##### 1.Clone this repository
```shell
$ git clone https://github.com/taxpon/angular2-simple-gulp-webpack
```
##### 2.Install npm libraries
```shell
$ npm install
```
##### 3.Install typings libraries
```shell
$ typings install
```
##### 4.Copy node libraries to build directory
```shell
$ gulp copy-libs
```
##### 5.Run gulp watcher
```shell
$ gulp
```

## Structure
```
├── LICENSE
├── README.md
├── build
│   ├── index.html
│   └── js
│       ├── bundle.js
│       └── lib
│           ├── Rx.js
│           ├── angular2-polyfills.js
│           ├── angular2.dev.js
│           ├── es6-shim.min.js
│           ├── router.dev.js
│           ├── system-polyfills.js
│           └── system.src.js
├── gulpfile.js
├── package.json
├── src
│   ├── app.component.ts
│   └── main.ts
├── tsconfig.json
├── typings.json
└── webpack.config.js
```

# License
MIT

