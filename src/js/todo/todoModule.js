import angular from 'angular';
import 'angular-ui-router';
import 'angular-bootstrap';
import '../shared/sharedModule';

import ListCtrl from './controllers/listCtrl';
import DetailCtrl from './controllers/detailCtrl';
import DetailedCtrl from './controllers/detailedCtrl';
import IpService from './services/ipService';

angular.module('todo', ['shared', 'ui.router', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('list', {
                url: '/',
                templateUrl: 'js/todo/controllers/listCtrl.html',
                controller: ListCtrl,
                controllerAs: 'ctrl'
            })
            .state('detail', {
                url: '/details/{id}',
                templateUrl: 'js/todo/controllers/detailCtrl.html',
                controller: DetailCtrl,
                controllerAs: 'ctrl'
            })
            .state('detailed', {
                url: '/details/{id}/more',
                templateUrl: 'js/todo/controllers/detailedCtrl.html',
                controller: DetailedCtrl,
                controllerAs: 'ctrl'
            });

        $urlRouterProvider.otherwise('/');
    })
    .service('TwitterService', IpService);

