import Ember from 'ember';
import Base from 'simple-auth/authorizers/base';

export default Base.extend({
    authorize: function(jqXHR, requestOptions) {
    	console.log("[DEBUG:authorizers/custom.js::authorize]");
    	console.log("requestOptions : "+requestOptions);
        var accessToken = this.get('session.content.secure.token');
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
            jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        }
    }
});