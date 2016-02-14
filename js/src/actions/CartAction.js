var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var CartAction = {
    clearCart: function () {
        AppDispatcher.dispatch({
            actionType: AppConstants.CART_CLEAR
        });
    }
};

module.exports = CartAction;