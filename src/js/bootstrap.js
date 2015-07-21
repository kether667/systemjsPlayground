import angular from 'angular';
import 'angular-ui-router';

import RootCtrl from 'js/app/controllers/rootCtrl';
import OtherCtrl from 'js/app/controllers/otherCtrl';

export default function bootstrap() {
    angular.element(document).ready(function () {

        angular.module('app', ['ui.router'])
            .config(function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('state1', {
                        url: '/state1',
                        template: '<div>list <button ng-click="ctrl.hello()">hello</button><button ui-sref="state2">go to state 2</button></div>',
                        controller: OtherCtrl,
                        controllerAs: 'ctrl'
                    })
                    .state('state2', {
                        url: '/state2',
                        template: '<div>list <button ng-click="ctrl.hello()">hello</button><button ui-sref="state1">go to state 1</button></div>',
                        controller: RootCtrl,
                        controllerAs: 'ctrl'
                    });

                $urlRouterProvider.otherwise('/state1');
            });

        angular.bootstrap(document, ['app']);
    });
}