/**
 * Created by Denis Doan: www.denisdoan.com
 */
 // 7. inject ngRoute
var app = angular.module('skillsListApp', ["ngRoute"]);

// Controls the body
app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = "Skills List";
}]);

app.controller("SkillsListItemsController", ["$scope", function($scope){
    $scope.skillsItems = [
        {itemName: 'HTML5'},
        {itemName: 'CSS3'},
        {itemName: 'jQuery'},
        {itemName: 'Bootstrap'},
        {itemName: 'Responsive Web'},
        {itemName: 'AngularJS'},
        {itemName: 'Web Performance Optimization'},
        {itemName: 'APIs'}
    ]

}])