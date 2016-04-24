import Ember from 'ember';
import DS from 'ember-data';


export default DS.JSONAPIAdapter.extend({
	session: Ember.inject.service('session'),

	host: 'https://orunginal-api.herokuapp.com',

	headers : {
		user_id: 11,
	 	token: 'zkcYq3mHooh9-9j1Z2f6',
	 	accept: 'application/json'
	},

	find: (store, type, id) => {
		console.log('CUSTOM!!!');
		return this._super(store, type, id);
	}

	// headers: Ember.computed('session.user_id', 'session.token', () => {
	// 	var _this = this;
 //    	return {
 //    		crossDomain: true,
	// 		user_id: _this.get('session.user_id'),
	// 		token: _this.get('session.token')
 //    	};
 //  	})

});
