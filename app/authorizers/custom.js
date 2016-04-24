import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
    authorize: function(jqXHR, requestOptions) {
    	console.log("[DEBUG:authorizers/custom.js::authorize]");
    	console.log("requestOptions : "+requestOptions);
    	requestOptions.contentType = 'application/json;charset=utf-8';
	    requestOptions.crossDomain = true;
	    requestOptions.xhrFields = {
	      	withCredentials: true
	    };

        var accessToken = this.get('session.token');
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
            jqXHR.setRequestHeader('Authorization', 'token ' + accessToken);
            //jqXHR.setRequestHeader('X-CSRF-Token', accessToken);
        }
    }
});
