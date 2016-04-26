import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';


export default JSONAPIAdapter.extend({
	session: Ember.inject.service('session'),

	host: 'https://orunginal-api.herokuapp.com',

	headers : {
		user_id: 22,
	 	token: 'TpGDH8uJfyn8sfay9rtA',
	 	api_key: 'change_me_at_prod1',
	 	accept: 'application/json'
	}
	// headers: Ember.computed('session.id', 'session.token', () => {
 //    	return {
	// 		'user_id': this.get('session.id'),
	// 		'token': this.get('session.token'),
	// 		'api_key': 'change_me_at_prod1',
	//  		'accept': 'application/json'
 //    	};
 //  	})


	// find: (store, type, id) => {
	// 	console.log('CUSTOM!!!');
	// 	return this._super(store, type, id);
	// }

	

});
