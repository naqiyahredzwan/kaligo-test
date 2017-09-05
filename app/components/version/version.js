'use strict';

angular.module('kaligoApp.version', [
  'kaligoApp.version.interpolate-filter',
  'kaligoApp.version.version-directive'
])

.value('version', '0.1');
