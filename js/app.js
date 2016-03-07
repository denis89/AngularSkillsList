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
        {itemName: 'HTML5'},
        {itemName: 'CSS3'},
        {itemName: 'jQuery'},
        {itemName: 'Bootstrap'},
        {itemName: 'Responsive Web'},
        {itemName: 'AngularJS'},
        {itemName: 'Web Performance Optimization'},
        {itemName: 'APIs'}
    ];

    // 31. You also have to declare the save function here in the service
    skillsService.save = function(entry){
      // Add it into the array
      skillsService.skillsItems.push(entry);
    }
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
// 27 location service 
app.controller("SkillsListItemsController", ["$scope", "$routeParams", "$location", "SkillsService", function($scope, $routeParams, $location, SkillsService){
    //22 Setting it equal
    $scope.skillsItems = SkillsService.skillsItems;
    // 28. It is linked to the inputItem.html with ng model. So HTMl5 appears as a placeholder. ng model function declared.
    $scope.skillsItem = {itemName: "HTML5"}

    // 29. Declaring the save function.
    $scope.save = function(){
      //30. Telling this function to save the skillsItem.
      SkillsService.save($scope.skillsItem);
      $location.path("/");
    }

    // 16 kind of return statement
    $scope.rp = "Route Parameter Value: " + $routeParams.id;
}]);