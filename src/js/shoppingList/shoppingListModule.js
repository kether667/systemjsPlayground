import angular from 'angular';
import 'angular-ui-router';
import 'angular-bootstrap';
import '../shared/sharedModule';

angular.module('shoppingList', ['shared', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('shoppingList', {
                url: '/shoppingList',
                templateUrl: 'js/shoppingList/controllers/shoppingList.html',
            });
    });