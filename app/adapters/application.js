import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';


export default JSONAPIAdapter.extend({
	session: Ember.inject.service('session'),

	host: 'https://orunginal-api.herokuapp.com',

	headers: Ember.computed('session.id', 'session.token', function() {
		return {
			"USER_ID": this.get("session.id"),
			"TOKEN": this.get("session.token"),
			"API_KEY": "change_me_at_prod1",
			"ACCEPT": "application/json"
		};
	})

});
