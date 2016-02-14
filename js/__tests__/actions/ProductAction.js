jest.dontMock('../../src/actions/ProductAction');
jest.dontMock('../../src/constants/AppConstants');

describe('ProductAction', function () {

    var action,
        dispatcher,
        ajax,
        constants;

    beforeEach(function () {
        action = require('../../src/actions/ProductAction');
        dispatcher = require('../../src/dispatcher/AppDispatcher');
        constants = require('../../src/constants/AppConstants');
        ajax = require('../../src/utils/ajax');
    });

    describe('loadData()', function () {

        beforeEach(function () {
            action.loadData();
        });

        it('should call the API', function () {
            expect(ajax.get).toBeCalledWith('api.json', jasmine.any(Function), jasmine.any(Object));
        });

        describe('when we get the response', function () {

            var respondwith = function (data) {
                ajax.get.mock.calls[0][1].call(ajax.get.mock.calls[0][2], data);
            };

            it('should dispatch the PRODUCT_LOADED event with the proper data', function () {
                var data = {};

                respondwith(data);

                expect(dispatcher.dispatch).toBeCalledWith({
                    actionType: constants.PRODUCT_LOADED,
                    data: data
                });
            });
        });
    });

    describe('selectProduct()', function () {

        it('should dispatch the event with the selected data product', function () {
            action.selectProduct(124124124);

            expect(dispatcher.dispatch).toBeCalledWith({
                actionType: constants.PRODUCT_SELECTED,
                sku: 124124124
            });
        });
    });

    describe('addToCart()', function () {

        it('should dispatch the event with the selected product', function () {
            var product = {};
            action.addToCart(product);

            expect(dispatcher.dispatch).toBeCalledWith({
                actionType: constants.ADD_TO_CART,
                product: product
            });
        });
    });
});