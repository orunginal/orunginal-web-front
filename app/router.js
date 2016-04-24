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
    this.route('dashboard', function() {
      this.route('admin');
      this.route('customer');
    });
  });

  this.route('admin', function() {
    this.route('users');
  });
  this.route('contact');
  this.route('inscription');
});

export default Router;
