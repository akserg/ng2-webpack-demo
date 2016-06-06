// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router-deprecated';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

// Add iOS shim for HTML 5 drag'n'drop: https://github.com/timruffles/ios-html5-drag-drop-shim
//import 'drag-drop-webkit-mobile/ios-drag-drop';

if ('production' === ENV) {
  // Production


} else {
  // Development

}
