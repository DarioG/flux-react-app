jest.dontMock('../../src/stores/ProductStore');
jest.dontMock('../../src/constants/AppConstants');
jest.dontMock('object-assign');

describe('ProductStore', function () {

    var store,
        dispatcher,
        constants,
        mockedCallback,
        data;

    beforeEach(function () {
        store = require('../../src/stores/ProductStore');

        constants = require('../../src/constants/AppConstants');
        dispatcher = require('../../src/dispatcher/AppDispatcher');
        data = {
            'id': '001100112',
            'name': 'Espresso Coffee Brazil',
            'image': 'brazil-coffee.jpg',
            'description': 'yeja',
            'variants': [{
                'sku': 123123123,
                'type': '284g Package',
                'price': 10.85,
                'inventory': 1
            }, {
                'sku': 124124124,
                'type': '6 Pack',
                'price': 62.99,
                'inventory': 5
            }, {
                'sku': 125125125,
                'type': '12 Pack',
                'price': 119.99,
                'inventory': 3
            }]
        };

        mockedCallback = jest.genMockFunction();

        store.addChangeListener(mockedCallback);
    });

    describe('when initializing', function () {

        it('should have no data', function () {
            expect(store.getData()).toEqual({});
        });
    });

    describe('when the dispatcher dispatches PRODUCT_LOADED event', function () {

        beforeEach(function () {
            dispatcher.register.mock.calls[0][0].call(null, {
                actionType: constants.PRODUCT_LOADED,
                data: data
            });
        });

        it('should add the data to the store', function () {
            expect(store.getData()).toEqual(data);
        });

        it('should select the first product', function () {
            expect(store.getSelectedProduct()).toBe(123123123);
        });

        it('should emit the change', function () {
            expect(mockedCallback).toBeCalled();
        });

        describe('when the dispatcher dispatches PRODUCT_SELECTED event', function () {

            beforeEach(function () {
                mockedCallback.mockClear();
                dispatcher.register.mock.calls[0][0].call(null, {
                    actionType: constants.PRODUCT_SELECTED,
                    sku: '125125125'
                });
            });

            it('should mark the selected product as selected', function () {
                expect(store.getSelectedProduct()).toBe(125125125);
            });

            it('should emit the change', function () {
                expect(mockedCallback).toBeCalled();
            });

            describe('if another event is triggered', function () {

                it('should not modify the selected one', function () {
                    dispatcher.register.mock.calls[0][0].call(null, {
                        actionType: 'dummy',
                        data: 'dummy'
                    });

                    expect(store.getSelectedProduct()).toBe(125125125);
                });
            });
        });

        describe('when the dispatcher dispatches ADD_TO_CART', function () {

            beforeEach(function () {
                mockedCallback.mockClear();

                dispatcher.register.mock.calls[0][0].call(null, {
                    actionType: constants.ADD_TO_CART,
                    product: {
                        'sku': 124124124,
                        'type': '6 Pack',
                        'price': 62.99,
                        'inventory': 5
                    }
                });
            });

            it('should update the inventory items', function () {
                expect(store.getData().variants[1].remains).toEqual(4);
            });

            it('should emit the change', function () {
                expect(mockedCallback).toBeCalled();
            });
        });
    });

    describe('when the dispatcher dispatches another event', function () {

        it('should do nothing', function () {
            dispatcher.register.mock.calls[0][0].call(null, {
                actionType: 'another',
                data: data
            });

            expect(store.getData()).toEqual({});
            expect(mockedCallback).not.toBeCalled();
        });
    });

    describe('removeChangeListener', function () {

        it('should stop listening the change event', function () {
            store.emitChange();

            expect(mockedCallback).toBeCalled();
            
            mockedCallback.mockClear();

            store.removeChangeListener(mockedCallback);
            store.emitChange();

            expect(mockedCallback).not.toBeCalled();
        });
    });
});