'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /Login when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/Login");
  });


  describe('Login', function() {

    beforeEach(function() {
      browser.get('index.html#!/Login');
    });


    it('should render Login when user navigates to /Login', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('Register', function() {

    beforeEach(function() {
      browser.get('index.html#!/Register');
    });


    it('should render Register when user navigates to /Register', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
