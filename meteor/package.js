// package metadata file for Meteor.js
'use strict';

var packageName = 'csl:chart';  // https://atmospherejs.com/chart/chart
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: 'Chart.js fork with a bootstrap fix',
  version: packageJson.version,
  git: 'https://github.com/CarlQLange/Chart.js.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export('Chart');
  api.addFiles([
    'Chart.js',
    'meteor/export.js'
  ], where
  );
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);

  api.addFiles('meteor/test.js', where);
});
