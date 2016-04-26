import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service('session'),

	beforeModel(transition) {
		//	For refresh/direct url access
		var isadmin = this.get('session.is_admin');
		if(isadmin === true){
			transition.abort();
			this.transitionTo('user.circuits');
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

	model() {
		//var path = 'users/'+this.get('session.id')+'/circuits';
		return this.store.findAll('user');
	},

	afterModel(model) {
		console.log('model length : ',model.get('length'));
	}
});
