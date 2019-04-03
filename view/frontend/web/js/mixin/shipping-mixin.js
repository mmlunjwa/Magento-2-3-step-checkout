define([
    'ko',
    'Magento_Customer/js/model/customer',
    'Magento_Checkout/js/model/address-converter',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/action/select-shipping-address',
    'mage/translate'
], function (ko, customer, addressConverter, quote, selectShippingAddress, $t) {
    'use strict';

    return function (target) {
        return target.extend({
            /**
             * Disable visibility on shipping, since it's no longer the first step.
             */
            visible: ko.observable(customer.isLoggedIn() && !quote.isVirtual()),

            /**
             * Backport of fix MAGETWO-83272, allow navigation between steps.
             */
            navigate: function (step) {
                step && step.isVisible(true);
            }
        });
    }
});