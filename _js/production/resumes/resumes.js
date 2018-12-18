if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'resumes'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'resumes'.");
}
var resumes = function (_, Kotlin) {
  'use strict';
  function main(args) {
    document.write('<b>Hello there<\/b>');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('resumes', _);
  return _;
}(typeof resumes === 'undefined' ? {} : resumes, kotlin);
