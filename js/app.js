/**
 * Created by Denis Doan: www.denisdoan.com
 */
 // 7. inject ngRoute
var app = angular.module('skillsListApp', ["ngRoute"]);

// 11. Add routing
app.config(function($routeProvider){
      $routeProvider
      .when("/", {
        // with the controller after , it will show the skillsItems
          templateUrl: "views/skillsList.html",
          controller: "SkillsListItemsController"
      })
    // 12. 2nd route to add the add Item button functionality 
      .when("/inputItem", {
          templateUrl: "views/inputItem.html",
          controller: "SkillsListItemsController"
      })
   // 13. error handling
      .otherwise({
        redirectTo:"/"
        })

})

// Controls the body
app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = "Skills List";
}]);

app.controller("SkillsListItemsController", ["$scope", function($scope){
    $scope.skillsItems = [
        {completed: true, itemName: 'HTML5'},
        {completed: true, itemName: 'CSS3'},
        {completed: true, itemName: 'jQuery'},
        {completed: true, itemName: 'Bootstrap'},
        {completed: true, itemName: 'Responsive Web'},
        {completed: true, itemName: 'AngularJS'},
        {completed: true, itemName: 'Web Performance Optimization'},
        {completed: true, itemName: 'APIs'}
    ]

}]);