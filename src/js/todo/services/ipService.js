import BaseService from 'js/shared/services/baseService'

export default class IpService extends BaseService {
    constructor($http, $q) {
        super($http, $q);
    }

    getIp() {
        return this.getData('http://jsonip.com');
    }
}

IpService.$inject = ['$http', '$q'];