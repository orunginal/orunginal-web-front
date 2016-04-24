import DS from 'ember-data';

export default DS.Model.extend({
    //age: DS.attr('number'),
    //phone_number: DS.attr('number'),
	//	Connection info
	
	//is_admin: DS.attr('boolean', { defaultValue: false }), //	Will transform string to bool

	// 	Personal info
  	name: DS.attr(),
  	surname: DS.attr(),
    email: DS.attr()
  	// urlphoto: DS.attr('string'),
  	// createdat: DS.attr('date'),

  	// //	Relationships
  	// circuits: DS.hasMany('circuit'),
  	// groups: DS.hasMany('group')
});
