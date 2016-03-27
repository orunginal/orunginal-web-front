import DS from 'ember-data';

export default DS.Model.extend({
  idpoint: DS.attr('number'),
  lat: DS.attr('number'),
  lon: DS.attr('number'),

  //	Relationships
  circuits: DS.hasMany('circuit')
});
