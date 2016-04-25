import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  fingerprint: {
    exclude: [
      'images/layers-2x.png',
      'images/layers.png',
      'images/marker-icon-2x.png',
      'images/marker-icon.png',
      'images/marker-shadow.png'
    ]
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
