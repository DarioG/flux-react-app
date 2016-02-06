var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var _data = {};

var _addData = function (product) {
    if (_data[product.sku]) {
        _data[product.sku].push(product);
    } else {
         _data[product.sku] = [product];
    }
};

var CartStore = assign({}, EventEmitter.prototype, {
    getData: function () {
        return _data;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    }
});

AppDispatcher.register(function (action) {
    if (action.actionType === AppConstants.ADD_TO_CART) {
        _addData(action.product);
        CartStore.emitChange();
    }
});

module.exports = CartStore;