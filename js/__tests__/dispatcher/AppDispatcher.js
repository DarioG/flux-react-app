jest.dontMock('../../src/dispatcher/AppDispatcher');

describe('AppDispatcher', function () {

    it('should be defined', function () {
        var dispatcher = require('../../src/dispatcher/AppDispatcher');

        expect(dispatcher).toBeDefined();
        expect(dispatcher instanceof require('flux').Dispatcher).toBe(true);
    });
});