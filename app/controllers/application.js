import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),

	actions: {
		restore () {
			this.get('session').restore();
			console.log('call restoreSession');
		},
		invalidateSession() {
		  	this.get('session').invalidate();
		}
	}
});
