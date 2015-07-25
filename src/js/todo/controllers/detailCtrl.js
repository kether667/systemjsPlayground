import angular from 'angular';

export default class DetailCtrl {
    constructor($stateParams, $log, IpService) {
        this.itemId = $stateParams.id;
        this.tweets = [];

        IpService.getIp()
            .then((data) => {
                this.tweets = data;
            });
    }
}

DetailCtrl.$inject = ['$stateParams', '$log', 'TwitterService'];