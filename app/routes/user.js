import Ember from 'ember';

export default Ember.Route.extend({  
	session: Ember.inject.service('session'),

	beforeModel(transition) {

		//	Check if user isAuthenticated
		var isAuthenticated = this.get('session').get('isAuthenticated');
		if(isAuthenticated === false){
			transition.abort();
			this.transitionTo('');
		}

	}
});