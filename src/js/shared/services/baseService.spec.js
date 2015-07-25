'use strict';

import BaseService from './baseService';

//beforeEach(module('shared'));
//
////update the injection
//beforeEach(inject(function (baseService) {
//    service = baseService;
//}));

describe('ListCtrl', () => {
    it('should be injected and defined', () => {
        let service = new BaseService();

        expect(service).toBeDefined();
    });
});