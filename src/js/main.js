/* global RiseVision */
(function () {
  "use strict";

  // Elements to inject
  var mySVGsToInject = document.querySelectorAll("img.image");

  // Do the injection
  SVGInjector(mySVGsToInject); // jshint ignore:line

  window.addEventListener("WebComponentsReady", function() {
    RiseVision.SpreadsheetEvents.init();
  });
})();
