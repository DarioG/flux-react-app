jest.dontMock('../../src/stores/CartStore');
jest.dontMock('../../src/constants/AppConstants');
jest.dontMock('object-assign');

describe('CartStore', function () {

    var store,
        constants,
        dispatcher;

    beforeEach(function () {
        store = require('../../src/stores/CartStore');
        constants = require('../../src/constants/AppConstants');
        dispatcher = require('../../src/dispatcher/AppDispatcher');
    });

    describe('when dispatcher dispatchs ADD_TO_CART event', function () {

        var product,
            mockedCallback;

        beforeEach(function () {
            product = {
                'sku': 123123123,
                'type': '284g Package',
                'price': 10.85,
                'inventory': 1
            };

            mockedCallback = jest.genMockFunction();

            store.addChangeListener(mockedCallback);

            dispatcher.register.mock.calls[0][0].call(null, {
                actionType: constants.ADD_TO_CART,
                product: product
            });
        });

        it('should add the product to the selected list', function () {
            expect(store.getData()['123123123'].length).toEqual(1);
            expect(store.getData()['123123123'][0]).toEqual(product);
        });

        describe('when another product is selected', function () {

            var newProduct;

            beforeEach(function () {
                newProduct = {
                        'sku': 456123,
                        'type': 'blablabla',
                        'price': 10.85,
                        'inventory': 1
                    };


                dispatcher.register.mock.calls[0][0].call(null, {
                    actionType: constants.ADD_TO_CART,
                    product: newProduct
                });
            });

            it('should add the new product and keep the previous one', function () {
                expect(store.getData()['123123123'].length).toEqual(1);
                expect(store.getData()['123123123'][0]).toEqual(product);

                expect(store.getData()['456123'].length).toEqual(1);
                expect(store.getData()['456123'][0]).toEqual(newProduct);
            });

            describe('when a repeated product has been added', function () {

                it('should add to the proper list, keeping the old ones', function () {
                    var newOldProduct = {
                        'sku': 456123,
                        'type': 'blablabla',
                        'price': 10.85,
                        'inventory': 1
                    };

                    dispatcher.register.mock.calls[0][0].call(null, {
                        actionType: constants.ADD_TO_CART,
                        product: newOldProduct
                    });

                    expect(store.getData()['123123123'].length).toEqual(1);
                    expect(store.getData()['123123123'][0]).toEqual(product);

                    expect(store.getData()['456123'].length).toEqual(2);
                    expect(store.getData()['456123'][0]).toEqual(newProduct);
                    expect(store.getData()['456123'][1]).toEqual(newOldProduct);
                });
            });
        });

        it('should emit the change', function () {
            expect(mockedCallback).toBeCalled();
        });
    });

    describe('when the dispatcher dispatchs any other event', function () {

        it('should do nothing', function () {
            var product = 'fake';

            dispatcher.register.mock.calls[0][0].call(null, {
                actionType: 'anyOtherEvent',
                product: product
            });

            expect(store.getData()).toEqual({});
        });
    });
});