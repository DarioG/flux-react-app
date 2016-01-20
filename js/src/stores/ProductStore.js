var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var _data = {};

function addData(data) {
    _data = data;
}
var ProductStore = assign({}, EventEmitter.prototype, {
    getData: function () {
        return _data;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function (action) {
    if (action.actionType === AppConstants.PRODUCT_LOADED) {
        addData(action.data);
        ProductStore.emitChange();
    }
});

module.exports = ProductStore;