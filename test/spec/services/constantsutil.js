'use strict';

describe('Service: constantsUtil', function () {

  // load the service's module
  beforeEach(module('ticketBookingAppApp'));

  // instantiate service
  var constantsUtil;
  beforeEach(inject(function (_constantsUtil_) {
    constantsUtil = _constantsUtil_;
  }));

  it('should do something', function () {
    expect(!!constantsUtil).toBe(true);
  });

});
