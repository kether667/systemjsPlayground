import todoModule from 'js/todo/todoModule'

angular.element(document)
    .ready(function () {
        angular.bootstrap(document, ['todo']);
    });
