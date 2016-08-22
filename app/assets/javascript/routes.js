angular.module('NoteWrangler').config(function($routeProvider){
  $routeProvider
    .when('/',{
      redirectoTo:'/notes'
    })
    .when('/notes',{
      templateUrl: "assets/templates/notes/index.html",
      controller: "NotesIndexController"
    })
    .when('/note/new',{
      templateUrl: "assets/templates/notes/new.html",
      controller: "NotesCreateController"
    })
    .when('/note/:id',{
      templateUrl: "assets/templates/notes/show.html",
      controller: "NotesShowController"
    })
    .when('/note/:id/edit',{
      templateUrl: "assets/templates/notes/edit.html",
      controller: "NotesEditController"
    })
});
