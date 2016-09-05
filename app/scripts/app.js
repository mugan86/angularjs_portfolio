'use strict';

/**
 * @ngdoc overview
 * @name mugan86App
 * @description
 * # mugan86App
 *
 * Main module of the application.
 */
angular
  .module('mugan86App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .run(function($rootScope) {
    $rootScope.url = 'images/home-bg.jpg';

    $rootScope.changeLanguage = function(lang)
    {
      console.log('Change language: ' + lang);
    };
  })
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', translations_en);
   
    $translateProvider.translations('es', translations_es);

    $translateProvider.translations('eu', translations_es);
 
    $translateProvider.preferredLanguage('en');
    // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('escape');

    console.log('LANG: '+ window.localStorage.getItem('lang'));

    if (window.localStorage.getItem('lang') === null || window.localStorage.getItem('lang') === '')
    {
      window.localStorage.setItem('lang','en');
    }

    
}])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
