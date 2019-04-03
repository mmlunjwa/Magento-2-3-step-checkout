var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/step-navigator': {
                'Sqli_CheckoutLoginStep/js/mixin/navigator-mixin': true
            },
            'Magento_Checkout/js/view/progress-bar': {
                'Sqli_CheckoutLoginStep/js/mixin/progress-bar-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Sqli_CheckoutLoginStep/js/mixin/shipping-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Sqli_CheckoutLoginStep/js/mixin/payment-mixin': true
            }
        }
    }
};