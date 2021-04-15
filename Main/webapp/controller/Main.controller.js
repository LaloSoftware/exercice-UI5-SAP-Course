sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "../model/formatter",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
	],
	function (Controller, MessageToast, formatter, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("ns.Main.controller.Main", {
            formatter: formatter,
			onInit: function () {

            },
            
            onSayHello: function () {
                let oBundle = this.getView().getModel("i18n").getResourceBundle(),
                    sRecipient = this.getView().getModel("HelloPanel").getProperty("/recipient/name");
                let msg = oBundle.getText("HelloMSG", [sRecipient]);
                MessageToast.show(msg);
            },
            onFilterProducts : function (oEvent) {
                var productFilter = [];
                var sQuery = oEvent.getParameter("query");
                if(sQuery){
                    productFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
                }

                var oList = this.byId("Products");
                var oBinding = oList.getBinding('items');
                oBinding.filter(productFilter);
            },

            onItemSelected: function (oEvent) {
                var oSelectedItem = oEvent.getSource();
                var oContext = oSelectedItem.getBindingContext();
                var sPath = oContext.getPath();
                var oProductDetailPanel = this.byId("productDetailsPanel");
                oProductDetailPanel.bindElement({ path: sPath });
                this.byId("productDetailsPanel").setVisible(true); 
            }

		});
	});
