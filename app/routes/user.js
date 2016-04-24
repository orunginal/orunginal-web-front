import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, { 
	session: Ember.inject.service(),

	model() {
		// $.ajaxSetup({
		//   crossDomain: true,
		//   xhrFields: {
		//     withCredentials: true
		//   }
		// });
		console.log('Fetching user..');
		console.log(this.get('session.user_id'));
		var user = this.store.findRecord('user', 11);

		user.then((value) => {
		  	// on fulfillment
		  	console.log('Sucess :',value);
		}, (reason) => {
		  	// on rejection
		  	console.log('Fail :',reason);
		});
		if (true)
		{
			console.log(user);
			return user;
		}
		else
		{
			return [{
				'user_id': this.get('session.user_id'),
				'email': this.get('session.email'),
				'token': this.get('session.token'),
				'is_admin': this.get('session.is_admin')
			}];
		}
		
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
	}

	// afterModel() {
	// 	console.log(model());
	// }
});