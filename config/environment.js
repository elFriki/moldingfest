/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'molidngfest',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

    i18n: {
      defaultLocale: 'es',
      alowedLocales: ['es','en', 'fr', 'pt']
    },

    moment: {
      outputFormat: 'LL',
      allowEmpty: true, // default: false
      defaultFormat: 'DD.MM.YYYY',
      defaultLocale: 'es',
      includeLocales: ['es', 'en', 'fr', 'pt'],
      includeTimezone: 'all'
    },

    firebase: {
      apiKey: 'AIzaSyDIGoxZ1pLJL_Di8eT7eticm0UoEe_IXbU',
      authDomain: 'moldingfest-cfd7a.firebaseapp.com',
      databaseURL: 'https://moldingfest-cfd7a.firebaseio.com',
      storageBucket: 'moldingfest-cfd7a.appspot.com',
      messagingSenderId: "52616671197"
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },

      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
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
