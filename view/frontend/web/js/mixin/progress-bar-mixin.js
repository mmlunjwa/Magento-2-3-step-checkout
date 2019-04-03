define([

], function () {
    'use strict';

    /**
     * Override progress bar template so we can style the step icons.
     */
    return function (target) {
        return target.extend({
            defaults: {
                template: 'Sqli_CheckoutLoginStep/progress-bar',
                visible: true
            }
        });
    }
});