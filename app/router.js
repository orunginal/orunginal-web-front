import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('sign_up');
  this.route('page-not-found', { path: '/*wildcard'});

  this.route('user', function() {
    this.route('admin');
    this.route('circuits');
  });

  this.route('contact');
  this.route('inscription');
});

export default Router;
