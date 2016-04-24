import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service('session'),

	beforeModel(transition) {
		console.log(this.get('session.is_admin'));
		//	For refresh/direct url access
		var isadmin = this.get('session.is_admin');
		if(isadmin === true){
			transition.abort();
			this.transitionTo('user.dashboard.admin');
		}


	}
});
