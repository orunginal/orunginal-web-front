import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, { 
	session: Ember.inject.service(),

	model() {
		return this.store.findRecord('user', this.get('session.id'));
	},

	beforeModel(transition) {

		//	Check if user isAuthenticated
		var isAuthenticated = this.get('session.isAuthenticated');
		if(isAuthenticated === false){
			transition.abort();
			this.transitionTo('');
		}

		//	Set class on
		Ember.$(window).ready(function() {
			Ember.$('.navbar-default').addClass('on');
		});

		//	Keep class on
		Ember.$(window).bind('scroll', function() {
			Ember.$('.navbar-default').addClass('on');
		});
	},

	afterModel(model) {
		console.log(model.get('email'));
		console.log(model.get('name'));
		console.log(model.get('surname'));
		console.log(model.get('age'));
		// model.get('circuits').then((circuits) => {
		// 	// for each (var circuit in circuits) {
		// 	console.log(circuits[0].get('description'));
		// 	// }
		// });
	}
});