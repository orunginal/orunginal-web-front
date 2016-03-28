import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

	beforeModel(transition){
		this._super(transition);

		/*====================================
	    Show Menu on Book
	    ======================================*/
	    Ember.$(window).bind('scroll', function() {
	        var navHeight = $(window).height() - 150;
	        if (Ember.$(window).scrollTop() > navHeight) {
	            Ember.$('.navbar-default').addClass('on');
	        } else {
	            Ember.$('.navbar-default').removeClass('on');
	        }
	    });
	}
	 
});