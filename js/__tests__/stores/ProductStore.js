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
            id: 'yeja'
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

        it('should emit the change', function () {
            expect(mockedCallback).toBeCalled();
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