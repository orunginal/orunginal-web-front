import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(transition){
		console.log(transition);

		/*====================================
	    Show Menu on Book
	    ======================================*/
	    //	Set class off
		Ember.$(window).ready(function() {
			Ember.$('.navbar-default').removeClass('on');
		});

	    Ember.$(window).bind('scroll', function() {
	        var navHeight = Ember.$(window).height() - 150;
	        if (Ember.$(window).scrollTop() > navHeight) {
	            Ember.$('.navbar-default').addClass('on');
	        } else {
	            Ember.$('.navbar-default').removeClass('on');
	        }
	    });
	}
});
