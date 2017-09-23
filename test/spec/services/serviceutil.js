'use strict';

describe('Service: serviceUtil', function () {

  // load the service's module
  beforeEach(module('ticketBookingAppApp'));

  // instantiate service
  var serviceUtil;
  beforeEach(inject(function (_serviceUtil_) {
    serviceUtil = _serviceUtil_;
  }));

  it('should do something', function () {
    expect(!!serviceUtil).toBe(true);
  });

});
