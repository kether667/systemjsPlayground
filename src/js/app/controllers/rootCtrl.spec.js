'use strict';

import RootCtrl from 'rootCtrl';

describe('RootCtrl', () => {
    it('should welcome correctly', function () {
        let ctrl = new RootCtrl();
        expect(ctrl.hello()).toBe('hello from root');
        expect(ctrl.hello('from test')).toBe('hello from test');
    });
});