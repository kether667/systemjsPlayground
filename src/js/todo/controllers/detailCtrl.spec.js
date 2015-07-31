import {module, inject} from 'angular-mocks';
import 'js/todo/todoModule';

describe('DetailCtrl', () => {
    beforeEach(module('todo'));

    var ctrl, scope, ipService;

    beforeEach(inject(function ($controller, $rootScope, _IpService_, $q) {

        scope = $rootScope.$new();
        ipService = _IpService_;

        spyOn(ipService, 'getIp').and.returnValue($q.when({}));

        ctrl = $controller('DetailCtrl', {
            $scope: scope,
            $stateParams: {id: 'asd'},
            IpService: ipService
        });
    }));


    it('should initialize correctly', function () {
        expect(ctrl.itemId).toBe('asd');
    });
});
