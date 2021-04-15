sap.ui.define([], function(require, factory) {
    'use strict';
    
    return {
        delivery: function (iWeigth, oMeasure) {
            let result = "";
            if(oMeasure === "G"){
                iWeigth = iWeigth / 1000;
            }
            if(iWeigth < 0.5){
                result = "Mail deliver"
            } else if (iWeigth < 5){
                result = "Parcel deliver"
            } else {
                result = "Carrier deliver"
            }
            return result;
        }
    };
});