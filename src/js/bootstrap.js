import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ListCtrl from 'js/app/controllers/listCtrl';
import DetailCtrl from 'js/app/controllers/detailCtrl';

export default function bootstrap() {
    angular.element(document)
        .ready(function () {

            angular.module('app', ['ui.router'])
                .config(function ($stateProvider, $urlRouterProvider) {
                    $stateProvider
                        .state('list', {
                            url: '/',
                            templateUrl: '/js/app/controllers/listCtrl.html',
                            controller: ListCtrl,
                            controllerAs: 'ctrl'
                        })
                        .state('detail', {
                            url: '/{id}',
                            templateUrl: 'js/app/controllers/detailCtrl.html',
                            controller: DetailCtrl,
                            controllerAs: 'ctrl'
                        });

                    $urlRouterProvider.otherwise('/');
                });

            angular.bootstrap(document, ['app']);
        });
}