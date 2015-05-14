myApp.service('mapService',function(){

var map_canvas ='';
var map_options = '';
var map = '';
var marker = '';


var initialize = function () {


	map_canvas = document.getElementById('map_canvas');

	map_options = {
			center: new google.maps.LatLng(40.6665344,-73.9556367),
			zoom: 15
			};
	map = new google.maps.Map(map_canvas, map_options);

	marker = new google.maps.Marker({
			// The below line is equivalent to writing:
			// position: new google.maps.LatLng(-34.397, 150.644)
			position: {lat: 40.6665344, lng: -73.9556367},
			map: map
	});


  }

   //google.maps.event.addDomListener(window, 'load', initialize);


   // PUBLIC function available to application
   this.initMap = function () {

   	initialize();

   	google.maps.event.addDomListener(window, 'load', initialize);

   }


});


