'use strict';

/**
 * @ngdoc service
 * @name ticketBookingAppApp.serviceUtil
 * @description
 * # serviceUtil
 * Service in the ticketBookingAppApp.
 */
angular.module('ticketBookingAppApp')
  .service('serviceUtil', function ($q,$log,$http) {

    function get(url) {
      var defered = $q.defer();
      $http.get(url).then(function (res) {
        if(res.status == 200){
          defered.resolve(res);
        }else{
          defered.reject(res);
        }
      });

      return defered.promise;
    }


    function post(url,data) {
      var defered = $q.defer();
      $http.post(url,data).then(function (res) {
          defered.resolve(res);
      });

      return defered.promise;
    }

    function put(url,data) {
      var defered = $q.defer();
      $http.put(url,data).then(function (res) {
          defered.resolve(res);
      });

      return defered.promise;
    }

    return  {
      'get' : get,
      'post' : post,
      'put' : put
    }
    
  });
