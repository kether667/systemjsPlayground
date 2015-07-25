import DetailCtrl from './detailCtrl'

export default class DetailedCtrl extends DetailCtrl {

    constructor($stateParams, $log, TwitterService) {
        $log.info('before base class' );
        super($stateParams, $log, TwitterService);
        $log.info('after case class' );
    }
}

DetailCtrl.$inject = ['$stateParams', '$log', 'TwitterService'];