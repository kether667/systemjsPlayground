import DetailCtrl from './detailCtrl'

export default class DetailedCtrl extends DetailCtrl {

    constructor($stateParams, $log, IpService) {
        super($stateParams, $log, IpService);

        this.activate.then(() => {
            this.tweets['xxx'] = '123';
        });
    }

}

DetailCtrl.$inject = ['$stateParams', '$log', 'IpService'];