'use strict';

import ListCtrl from '/src/js/app/controllers/listCtrl';

describe('RootCtrl', () => {
    it('should welcome correctly', function () {
        let ctrl = new ListCtrl();
        expect(ctrl.hello()).toBe('hello from root');
        expect(ctrl.hello('from test')).toBe('hello from test');
    });
});