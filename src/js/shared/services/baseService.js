export default class BaseService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getData(url) {
        return this.makeHttpRequest({method: 'GET', url: url});
    }

    postData(url, data) {
        return this.makeHttpRequest({method: 'POST', url: url, data: data});
    }

    postFormData(url, data) {
        return this.makeHttpRequest({
            method: 'POST',
            url: url,
            data: $.param(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }, d);
    }

    putData(url, data) {
        return this.makeHttpRequest({method: 'PUT', url: url, data: data});
    }

    deleteData(url) {
        return this.makeHttpRequest({method: 'DELETE', url: url});
    }

    makeHttpRequest(config) {
        var d = this.$q.defer();

        this.$http(config)
            .success((data) => {
                d.resolve(data);
            })
            .error((data, status, headers, config) => {
                d.reject({
                    data: data,
                    status: status,
                    headers: headers,
                    config: config
                });
            });

        return d.promise;
    }
}

BaseService.$inject = ['$http', '$q'];
