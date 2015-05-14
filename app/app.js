var myApp = angular.module("MyApp", ["ngRoute","ngMessages","myAppControllers","firebase"]);

var myAppControllers = angular.module("myAppControllers",
                []);

 //document.getElementById("menu-Gallery").disabled = true;

myApp.config(function($routeProvider){
    $routeProvider
    .when("/", {
        controller: "MainController",
        templateUrl: "app/partials/loc_main.html"
    })
    .when("/guestbook", {
        templateUrl: "app/partials/loc_guestbook.html",
        controller: "GuestBookController"
    })
    .when("/services", {
        templateUrl: "app/partials/loc_services.html",
        controller: "ServicesController"
    })
    .when("/contacts", {
        templateUrl: "app/partials/loc_contacts.html",
        controller: "ContactsController"
    })



    .otherwise({redirectTo: "/"});
});




