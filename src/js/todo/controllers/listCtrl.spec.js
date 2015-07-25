'use strict';

import ListCtrl from '/src/js/todo/controllers/listCtrl';

describe('ListCtrl', () => {
    it('should initialize correctly', function () {
        let ctrl = new ListCtrl();
        expect(ctrl.items).toBeDefined();
        expect(ctrl.items.length).toBe(1);
        expect(ctrl.items[0]).toBe('nothing');
    });

    it('addItem should be able to add items', function () {
        let ctrl = new ListCtrl();
        ctrl.addItem('asd');

        expect(ctrl.items.length).toBe(2);
        expect(ctrl.items[0]).toBe('nothing');
        expect(ctrl.items[1]).toBe('asd');
    });

    it('clear should remove all items', function () {
        let ctrl = new ListCtrl();
        ctrl.addItem('asd');

        expect(ctrl.items.length).toBe(2);

        ctrl.clear();
        expect(ctrl.items.length).toBe(0);
    });

    it('remove should remove item at index', function () {
        let ctrl = new ListCtrl();
        ctrl.addItem('asd');

        expect(ctrl.items.length).toBe(2);

        ctrl.remove(0);
        expect(ctrl.items.length).toBe(1);
        expect(ctrl.items[0]).toBe('asd');
    });
});