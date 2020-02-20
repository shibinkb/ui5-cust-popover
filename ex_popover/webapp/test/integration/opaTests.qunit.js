/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/ex_popover/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});