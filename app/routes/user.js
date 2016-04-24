import Ember from 'ember';

export default Ember.Route.extend({  
	session: Ember.inject.service(),

	model() {
		return [{
			'id': this.get('session.id'),
			'email': this.get('session.email'),
			'token': this.get('session.token')
		}];
	},
	
	beforeModel(transition) {

		//	Check if user isAuthenticated
		var isAuthenticated = this.get('session').get('isAuthenticated');
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
	}
});