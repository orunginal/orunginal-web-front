import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service('session'),

	beforeModel(transition) {
		console.log(this.get('session.is_admin'));
		//	For refresh/direct url access
		var isadmin = this.get('session.is_admin');
		if(isadmin === false){
			transition.abort();
			this.transitionTo('user.circuits');
		}
	},

	model() {
		//var path = 'users/'+this.get('session.id')+'/circuits';
		return this.store.findAll('users');
	},

	afterModel(model) {
		console.log(model.get('length'));
	}
});
