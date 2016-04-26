import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(transition) {

		//	Set class on
		Ember.$(window).ready(function() {
			Ember.$('.navbar-default').addClass('on');
		});

		//	Keep class on
		Ember.$(window).bind('scroll', function() {
			Ember.$('.navbar-default').addClass('on');
		});
	}
});
