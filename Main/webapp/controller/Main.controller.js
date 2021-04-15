sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
	],
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("ns.Main.controller.Main", {
			onInit: function () {

            },
            
            onSayHello: function () {
                let oBundle = this.getView().getModel("i18n").getResourceBundle(),
                    sRecipient = this.getView().getModel("HelloPanel").getProperty("/recipient/name");
                let msg = oBundle.getText("HelloMSG", [sRecipient]);
                MessageToast.show(msg);
            }
		});
	});
