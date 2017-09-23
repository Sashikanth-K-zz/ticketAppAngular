'use strict';

/**
 * @ngdoc service
 * @name ticketBookingAppApp.constantsUtil
 * @description
 * # constantsUtil
 * Service in the ticketBookingAppApp.
 */
angular.module('ticketBookingAppApp')
  .service('constantsUtil', function () {
    return {
      'SERVICE_URL' : 'http://127.0.0.1:3000',
      'SCREENS'  : "/movie/screens",
      'BOOKINGS'  : '/movie/bookings'
    }
  });
