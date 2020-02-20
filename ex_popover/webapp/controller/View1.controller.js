sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.ex_popover.controller.View1", {
		onInit: function () {

		},
		showPopover: function (oEvent) {
			var oVbox = new sap.m.VBox();
			// oVbox.addStyleClass("sapUiSmallMargin");
			
			var oMessageStrip = new sap.m.MessageStrip({
				type: "Warning",
				text: "Extention requested on 15.01.2020"
			});
			oMessageStrip.addStyleClass("sapUiSmallMarginBottom");
			
			oVbox.addItem(oMessageStrip);

			var oFormattedText = new sap.m.FormattedText({
				htmlText: "Please contact your %%0 to extend the expiry date for your S-user ID or submit the %%1"
			});

			oVbox.addItem(oFormattedText);

			//Link1 Company's administrato
			oFormattedText.addControl(new sap.m.Link({
				text: "Company's administrato",
				press: this.onClickCompanyAdmin
			}));

			//Link2
			oFormattedText.addControl(new sap.m.Link({
				text: "Request Form",
				press: this.onClickShowRequestForm
			}));

			var oPopover = new sap.m.ResponsivePopover({
				placement: sap.m.PlacementType.Bottom,
				contentWidth: "450px",
				content: oVbox
			});

			oPopover.addStyleClass("sapUiPopupWithPadding");

			oPopover.openBy(oEvent.getSource());

		},

		onClickCompanyAdmin: function (oEvent) {
			sap.m.MessageToast.show("Company's Asministrator!!");
		},

		onClickShowRequestForm: function (oEvent) {
			sap.m.MessageToast.show("Show Request Form");
		}
	});
});