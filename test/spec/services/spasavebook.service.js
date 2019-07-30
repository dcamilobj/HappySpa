'use strict';

describe('Service: spasavebook.service', function () {

  // load the service's module
  beforeEach(module('happySpaApp'));

  // instantiate service
  var spasavebook.service;
  beforeEach(inject(function (_spasavebook.service_) {
    spasavebook.service = _spasavebook.service_;
  }));

  it('should do something', function () {
    expect(!!spasavebook.service).toBe(true);
  });

});
