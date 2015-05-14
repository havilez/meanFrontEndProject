myAppControllers.controller('ContactsController', ['$scope','mapService',
    function ContactsController($scope,mapService) {
        


    $scope.$on("$viewContentLoaded", function(){
        mapService.initMap(); // NOTE: uses map service here
  });
}
 


]);







