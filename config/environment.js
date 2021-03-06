/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'orunginal-web-front',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    googleLeaflet: {
      apiKey: 'AIzaSyCi3QoohlM8exST_bFrMbdmKOAcjFZnJGk'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  ENV.contentSecurityPolicy = {  
    'script-src': "'self' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com",
    'img-src': "'self' https://*.googleapis.com https://*.gstatic.com",
    'font-src': "'self' https://*.gstatic.com",
    'style-src': "'self' 'unsafe-inline' https://*.googleapis.com"
  };

  ENV['simple-auth'] = {
    //store: 'simple-auth-session-store:local-storage',
    authorizer: 'authorizer:custom',
    authenticator: 'authenticator:custom',
    crossOriginWhitelist: ['https://orunginal-api.herokuapp.com/'],
    //routeAfterAuthentication: '/protected'
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
