'use strict';
/**
 * @ngdoc functiondiv>
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp').controller('MainCtrl', function($scope, localStorageService,$filter) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];
    $scope.$watch('todos', function() {
        localStorageService.set('todos', $scope.todos);
    }, true);
    $scope.addTodo = function() { 
        if($scope.todos.indexOf($scope.todo) === -1 && !angular.isUndefined($scope.todo) && $scope.todo !== null && $scope.todo !== '') {
            $scope.todos.push({date: $filter('date')($scope.t_date, 'yyyy.M.dd'), name: $scope.todo, done: 0});
        }
        $scope.todo = ''; 
    };
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
    };
    
    $scope.today = function() {
        $scope.t_date = new Date();
        $scope.todaySelected = 1;
    };
    $scope.today();
    $scope.maxDate = new Date();
    $scope.matchDate = function(query) {
      return function(todo) { return todo.date.match($filter('date')(query, 'yyyy.M.dd')); }
    };
    $scope.isToday = function() {
        if($filter('date')($scope.t_date, 'yyyy.M.dd') == $filter('date')(new Date(), 'yyyy.M.dd'))
            $scope.todaySelected = 1;
        else $scope.todaySelected = 0;
    };
});