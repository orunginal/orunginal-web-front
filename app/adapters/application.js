import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'https://orunginal-api.herokuapp.com',
	headers: {
    	'Accept': 'application/json'
  	}
});
