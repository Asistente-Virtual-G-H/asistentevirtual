'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /website when location hash/fragment is empty', function() {
    browser.get('mainIndex.html');
    expect(browser.getLocationAbsUrl()).toMatch("/website");
  });


  describe('website', function() {

    beforeEach(function() {
      browser.get('mainIndex.html#!/website');
    });


    it('should render website when user navigates to /website', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });

});
