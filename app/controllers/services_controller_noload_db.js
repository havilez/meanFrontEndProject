myAppControllers.controller('ServicesController', ["$scope", "$firebaseObject",
    function ServicesController($scope, $firebaseObject) {
        
// var ref = new Firebase("https://ha-hair-proj3.firebaseio.com/salonData"); // not loading data
var ref = new Firebase("https://ha-hair-proj2.firebaseio.com/salonServices");



var obj = $firebaseObject(ref);
 

   obj.$loaded().then(function() {

  console.log("data loaded");

  });

   $scope.salonSerices2 =  obj;






  $scope.salonServices = [
{   type: 'Loc Styles ', 
    listing: [ 
      {name: 'Basic Style', price: '$50' },
      {name: 'Loc Curls', price: '$50' },
      {name: 'Creative Style', price: '$50' },
      {name: 'Braid Locs', price: '$50' },
      {name: '2 Strand Twist', price: '$50' },
      {name: 'Bantu Knots', price: '$50' },
      {name: 'Coils', price: '$50' }
  ]
},
{  type: 'Loc Maintenance',
   listing: [
      { name: 'Loc Pruning', price: '$50' },
      { name: 'Loc Repair', price: '$50' },
      { name: 'Retightening', price: '$50' },
      {name: 'Shampoo and Conditioner', price: '$50' }
      ]
},
{   type: 'Loc Color', 
    listing: [
      {name: 'Chi Color Touch Up', price: '$50' },
      {name: 'Color Edges', price: '$50' },
      {name: 'Corrective Color', price: '$50' },
      {name: 'Foil Hi-Lights', price: '$50' },
      {name: 'Henna', price: '$50' }
      ]
}  ];



}]);








