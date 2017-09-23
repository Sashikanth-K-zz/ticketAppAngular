'use strict';

/**
 * @ngdoc function
 * @name ticketBookingAppApp.controller:ScreenCtrl
 * @description
 * # ScreenCtrl
 * Controller of the ticketBookingAppApp
 */
angular.module('ticketBookingAppApp')
  .controller('ScreenCtrl', function ($scope,serviceUtil,$log,constantsUtil,$routeParams) {
    $scope.screenList = [];
    $scope.restError = null;

    getScreenList();

    function getScreenList() {
      var url = constantsUtil.SERVICE_URL + constantsUtil.SCREENS ; 
      serviceUtil.get(url).then(function (res) {
        $scope.screenList = res.data;
      });
    }

  });
