jest.dontMock('../../src/actions/CartAction');
jest.dontMock('../../src/constants/AppConstants');

describe('CartAction', function () {

    describe('clearCart()', function () {

        it('should dispatch the CART_CLEAR event', function () {
            var action = require('../../src/actions/CartAction'),
                dispatcher = require('../../src/dispatcher/AppDispatcher'),
                constants = require('../../src/constants/AppConstants');

            action.clearCart();

            expect(dispatcher.dispatch).toBeCalledWith({
                actionType: constants.CART_CLEAR
            });
        });
    });
});