import DetailCtrl from './detailCtrl'

export default class DetailedCtrl extends DetailCtrl {

    constructor($stateParams, $log, IpService) {
        $log.info('before base class' );
        super($stateParams, $log, IpService);
        $log.info('after case class' );
    }
}

DetailCtrl.$inject = ['$stateParams', '$log', 'IpService'];