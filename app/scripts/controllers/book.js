'use strict';

/**
 * @ngdoc function
 * @name ticketBookingAppApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the ticketBookingAppApp
 */
angular.module('ticketBookingAppApp')
  .controller('BookCtrl', function ($scope,serviceUtil,$log,constantsUtil,$routeParams) {

    $scope.noOfseats = 0;
    $scope.nameOfCustomer = "";

    

    $scope.bookingInfo = null;

    function book(){
      var screenId = $routeParams.id;
      var url = constantsUtil.SERVICE_URL + constantsUtil.BOOKINGS  + "/" + screenId; 
      serviceUtil.post(url).then(function(res){
        if(res.data != null){
          $scope,bookingInfo = res.data;
        }
      });

    }
    
  });
