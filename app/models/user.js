import DS from 'ember-data';

export default DS.Model.extend({
  age: DS.attr('number'),
  totaldistance: DS.attr('number'),
  totaltime: DS.attr('number'),
  circuitsnumber: DS.attr('number'),
  //phone_number: DS.attr('number'),
	//	Connection info
	
	is_admin: DS.attr('boolean', { defaultValue: true }),

	// 	Personal info
	name: DS.attr('string'),
	surname: DS.attr('string'),
  email: DS.attr('string'),
	// urlphoto: DS.attr('string'),
	createdat: DS.attr('date'),

	//	Relationships
	circuits: DS.hasMany('circuit')
	// groups: DS.hasMany('group')
});
