import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
	iduser: DS.attr('number'),
	//	Connection info
	email: DS.attr('string'),
	isadmin: DS.attr('boolean', { defaultValue: false }), //	Will transform string to bool

	// 	Personal info
  	firstname: DS.attr('string'),
  	lastname: DS.attr('string'),
  	fullname: Ember.computed('firstName', 'lastName', () => {
    	return "${this.get('firstName')} ${this.get('lastName')}";
  	}),
  	urlphoto: DS.attr('string'),
  	createdat: DS.attr('date'),

  	//	Relationships
  	circuits: DS.hasMany('circuit'),
  	group: DS.belongsTo('group')
});
