import angular from 'angular';
import RootCtrl from 'js/app/controllers/rootCtrl';
import OtherCtrl from 'js/app/controllers/otherCtrl';

export default function bootstrap() {
    angular.element(document).ready(function () {

        angular.module('app', [])
            .controller('rootCtrl', RootCtrl)
            .controller('otherCtrl', OtherCtrl);

        angular.bootstrap(document, ['app']);
    });
}