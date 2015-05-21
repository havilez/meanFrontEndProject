myAppControllers.controller('GuestBookController', ['$scope',
    function GuestBookController($scope) {
        
  

      $scope.submit_data = function(){

      var dataURL = "https://ha-hair-proj3.firebaseio.com/salonData";
  
        

//var salonCustomersRef = $firebaseObject(new Firebase(dataURL + '/' + 'salonCustomers'));

	  
        alert('submit successfull');
      };

      


    }

    


    ]);


