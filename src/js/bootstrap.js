import 'js/todo/todoModule'
import 'js/shoppingList/shoppingListModule'

angular.element(document)
    .ready(function () {
        angular.module('app', ['todo', 'shoppingList']);
        angular.bootstrap(document, ['app']);
    });
