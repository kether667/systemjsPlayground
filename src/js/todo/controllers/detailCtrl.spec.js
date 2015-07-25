'use strict';

import DetailCtrl from '/src/js/todo/controllers/detailCtrl';

describe('DetailCtrl', () => {
    it('should initialize correctly', function () {
        let ctrl = new DetailCtrl({id: 'asd'}, {}, {getIp: function() {return {then: function() {}}}});
        expect(ctrl.itemId).toBe('asd');
    });
});