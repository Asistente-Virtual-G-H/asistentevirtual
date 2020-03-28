'use strict';

describe('myApp.website module', function() {

  beforeEach(module('myApp.website'));

  describe('website controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var websiteCtrl = $controller('WebsiteCtrl');
      expect(websiteCtrl).toBeDefined();
    }));

  });
});