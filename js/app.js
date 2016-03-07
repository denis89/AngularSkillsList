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
        {id: 1, itemName: 'HTML5'},
        {id: 2, itemName: 'CSS3'},
        {id: 3, itemName: 'jQuery'},
        {id: 4, itemName: 'Bootstrap'},
        {id: 5, itemName: 'Responsive Web'},
        {id: 6, itemName: 'AngularJS'},
        {id: 7, itemName: 'Web Performance Optimization'},
        {id: 8, itemName: 'APIs'}
    ];

    // 32. Adding a new id function.
    skillsService.getNewId = function(){
      if (skillsService.newId) {
        // Increase the new Id by 1.
        skillsService.newId++;
        return skillsService.newId;
       } else {
            // A new and special library underscore.js for arrays and objects is needed for a specific function:max()
            var maxId = _.max(skillsService.skillsItems, function(entry){
              return entry.id});
            skillsService.newId = maxId.id +1;
            return skillsService.newId;
            }

       };

    
       

    // 31. You also have to declare the save function here in the service
    skillsService.save = function(entry){
      // It gets a new id.
      entry.id = skillsService.getNewId();
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


    // Debugging by console.logging. In this case, it gives the array with all its objects.
    console.log($scope.skillsItems);
}]);