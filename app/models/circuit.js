import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  idcircuit: DS.attr('number'),
  distance: DS.attr('number'),
  note: DS.attr('number'),
  description: DS.attr('string'),
  time: DS.attr('number'),
  createdat: DS.attr('date'),

  speed: Ember.computed('distance', 'time', () => {
  	return "${this.get('distance')} / ${this.get('time')}";
  }),

  //	Relationships
  user: DS.belongsTo('user'),
  points: DS.hasMany('point')
});
