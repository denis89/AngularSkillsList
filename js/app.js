/**
 * Created by Denis Doan: www.denisdoan.com
 */
 // 7. inject ngRoute
var app = angular.module('skillsListApp', ["ngRoute"]);

// 11. Add routing
app.config(function($routeProvider){
  // A route consists of 3 things: url extension, templateURL
     // and a controller
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
      // 14. routing with id
      .when("/inputItem/:id", {
          templateUrl: "views/inputItem.html",
          controller: "SkillsListItemsController"
      })
   // 13. error handling
      .otherwise({
        redirectTo:"/"
        })

})

// 18. Adding a new service
app.service("SkillsService", function(){
   var skillsService = {};
   //19 Put the skillsItems here from 15
   skillsService.skillsItems = [
        {completed: true, itemName: 'HTML5'},
        {completed: true, itemName: 'CSS3'},
        {completed: true, itemName: 'jQuery'},
        {completed: true, itemName: 'Bootstrap'},
        {completed: true, itemName: 'Responsive Web'},
        {completed: true, itemName: 'AngularJS'},
        {completed: true, itemName: 'Web Performance Optimization'},
        {completed: true, itemName: 'APIs'}
    ];
    // 20 return
    return skillsService;
})

// Controls the body
// 23 Passing skillsService into this controller
app.controller("HomeController", ["$scope", "SkillsService", function($scope, SkillsService) {
   // 24 Setting it equal again
    $scope.appTitle =  SkillsService.skillsItems[0].itemName;
    

}]);

// 15 adding another params $routeParams
// 21 adding another params SkillsSerivce
app.controller("SkillsListItemsController", ["$scope", "$routeParams", "SkillsService", function($scope, $routeParams, SkillsService){
    //22 Setting it equal
    $scope.skillsItems = SkillsService.skillsItems;
    // 16 kind of return statement
    $scope.rp = "Route Parameter Value: " + $routeParams.id;
}]);