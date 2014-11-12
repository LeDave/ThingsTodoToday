'use strict';
/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp').controller('MainCtrl', function($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];
    $scope.$watch('todos', function() {
        localStorageService.set('todos', $scope.todos);
    }, true);
    $scope.addTodo = function() {
        if($scope.todos.indexOf($scope.todo) === -1 && !angular.isUndefined($scope.todo) && $scope.todo !== null && $scope.todo !== '') {
            $scope.todos.push($scope.todo);
        }
        $scope.todo = '';
    };
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
    };
    
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();
    
    $scope.selectDate = function() {
        alert($scope.dt);
    };
});