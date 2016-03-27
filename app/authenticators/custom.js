import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
    //tokenEndpoint: 'http://localhost:3001/sessions/create',
    //tokenEndpoint: 'http://node-test-backend.herokuapp.com/sessions/create',
    tokenEndpoint: 'https://orunginal-api.herokuapp.com/users/sign_in',
    restore: function(data) {
        console.log("[DEBUG:authenticators/custom.js::restore]");
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },

    authenticate: function(identification, password) {
        console.log("[DEBUG] identification = "+identification);
        console.log("[DEBUG] password = "+password);
        console.log("[DEBUG:authenticators/custom.js::authenticate]");

        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.ajax({
                url: this.tokenEndpoint,
                type: 'POST',
                data: {
                    user: {
                        email: identification,
                        password: password
                    }
                },
                beforeSend: (request) => {
                    request.setRequestHeader('Accept', 'application/json');
                },
                dataType: 'json' 
                
            }).then(function(response) {
                console.log("response");
                console.log(response);
                Ember.run(function() {
                    resolve({
                        token: response.data.token,
                        email: response.data.email
                    });
                });
            }, function(xhr, status, error) {
                console.log("status : "+status);
                console.log("error : "+error);
                console.log("response");
                console.log(response);
                var response = xhr.responseText;
                Ember.run(function() {
                    reject(response);
                });
            });
        });
    },

    invalidate: function() {
        console.log("[DEBUG:authenticators/custom.js::invalidate]");
        console.log('invalidate...');
        return Ember.RSVP.resolve();
    }
});