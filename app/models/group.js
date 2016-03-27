import DS from 'ember-data';

export default DS.Model.extend({
  idgroup: DS.attr('number'),
  name: DS.attr('string'),
  description: DS.attr('string'),

  //	Relationships
  users: DS.hasMany('user')
});
