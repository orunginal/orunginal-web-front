import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		return [{
			'id': this.get('session.id'),
			'email': this.get('session.email'),
			'token': this.get('session.token')
		}];
	}
});
 
