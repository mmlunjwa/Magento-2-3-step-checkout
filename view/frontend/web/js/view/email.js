define([
    'jquery',
    'ko',
    'uiComponent',
    'underscore',
    'Magento_Checkout/js/model/step-navigator',
    'Magento_Customer/js/customer-data',
    'Magento_Customer/js/model/customer',
    'mage/translate',
    'Sqli_CheckoutLoginStep/js/bindings/transitions',
    'Magento_Checkout/js/model/quote'
], function ($, ko, Component, _, stepNavigator, customerData, customer, $t) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Sqli_CheckoutLoginStep/email'
        },

        isVisible: ko.observable(!customer.isLoggedIn()),
        isCustomerLoggedIn: customer.isLoggedIn,
        errorValidationMessage: ko.observable(false),

        initialize: function () {
            this._super();
            stepNavigator.registerStep('email', null, $t('Login/Guest'), this.isVisible, _.bind(this.navigate, this), 5);
            return this;
        },

        navigate: function () {
                this.isVisible(true);
        },
        /**
         * @returns void
         */
        navigateToNextStep: function () {
            stepNavigator.next();
        },

        /**
         * @return {Boolean}
         */
        validateLoginInformation: function () {

            var emailValidationResult = customer.isLoggedIn();

            if (!customer.isLoggedIn()) {
                $(loginFormSelector).validation();
                emailValidationResult = Boolean($(loginFormSelector + ' input[name=username]').valid());
            }

            if (this.isFormInline) {
                this.source.set('params.invalid', false);

                if (this.source.get('params.invalid') || !emailValidationResult) {
                    return false;
                }
            }

            if (!emailValidationResult) {
                $(loginFormSelector + ' input[name=username]').focus();

                return false;
            }

            return true;
        }

    });
});