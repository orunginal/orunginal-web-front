import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
    tokenEndpoint: 'http://localhost:3001/sessions/create',
    //tokenEndpoint: 'https://orunginal-api.herokuapp.com/users/sign_in',
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
                data: JSON.stringify({
                    username: identification,
                    password: password
                }),
                contentType: 'application/json;charset=utf-8',
                dataType: 'json'
            }).then(function(response) {
                console.log("response");
                console.log(response);
                Ember.run(function() {
                    resolve({
                        token: response.id_token
                    });
                });
            }, function(xhr, status, error) {
                console.log("status : "+status);
                console.log("error : "+error);
                var response = xhr.responseText;
                console.log("response");
                console.log(response);
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