jest.dontMock('../../src/actions/ProductAction');
jest.dontMock('../../src/constants/AppConstants');

describe('ProductAction', function () {

    var action,
        dispatcher,
        constants;

    beforeEach(function () {
        action = require('../../src/actions/ProductAction');
        dispatcher = require('../../src/dispatcher/AppDispatcher');
        constants = require('../../src/constants/AppConstants');
    });

    describe('loadData()', function () {

        it('should call the API', function () {
            //code that test you call here
        });

        describe('when we get the response', function () {
            // Remove when adding the real API call
            var fetchData = function () {
                return {
                    'id': '001100112',
                    'name': 'Espresso Coffee Brazil',
                    'image': 'brazil-coffee.jpg',
                    'description': 'This coffee is picked by hand when fully ripe, sorted and dried with a Natural Process for 16 days on raised beds. Aroma of hazelnut and chocolate, stone fruit acidity with mild tropical fruit, rich and smooth chocolate mouthfeel.',
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
                    },{
                        'sku': 125125125,
                        'type': '12 Pack',
                        'price': 119.99,
                        'inventory': 3
                    }]
                };
            };

            it('should dispatch the PRODUCT_LOADED event with the proper data', function () {
                action.loadData();

                expect(dispatcher.dispatch.mock.calls.length).toBe(1);
                expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
                    actionType: constants.PRODUCT_LOADED,
                    data: fetchData()
                });
            });
        });
    });

    describe('selectProduct()', function () {

        it('should dispatch the event with the selected data product', function () {
            action.selectProduct(124124124);

            expect(dispatcher.dispatch.mock.calls.length).toBe(1);
            expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
                actionType: constants.PRODUCT_SELECTED,
                sku: 124124124
            });
        });
    });
});