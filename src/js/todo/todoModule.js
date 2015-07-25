import angular from 'angular';
import 'angular-ui-router';
import '../shared/sharedModule'

import ListCtrl from './controllers/listCtrl';
import DetailCtrl from './controllers/detailCtrl';
import DetailedCtrl from './controllers/detailedCtrl';
import IpService from './services/ipService';

angular.module('todo', ['shared', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('list', {
                url: '/',
                templateUrl: 'js/todo/controllers/listCtrl.html',
                controller: ListCtrl,
                controllerAs: 'ctrl'
            })
            .state('detail', {
                url: '/{id}',
                templateUrl: 'js/todo/controllers/detailCtrl.html',
                controller: DetailCtrl,
                controllerAs: 'ctrl'
            })
            .state('detailed', {
                url: '/{id}/more',
                templateUrl: 'js/todo/controllers/detailedCtrl.html',
                controller: DetailedCtrl,
                controllerAs: 'ctrl'
            });

        $urlRouterProvider.otherwise('/');
    })
    .service('TwitterService', IpService);

