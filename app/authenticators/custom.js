import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
    session: Ember.inject.service('session'),
    //tokenEndpoint: 'http://localhost:3001/sessions/create',
    //tokenEndpoint: 'http://node-test-backend.herokuapp.com/sessions/create',
    tokenEndpoint: 'https://orunginal-api.herokuapp.com/users/sign_in',
    restore: function(data) {
        console.log("[DEBUG:authenticators/custom.js::restore]");
        var _this = this;
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                Ember.run(function() {
                    resolve(data);
                });
                _this.get('session').set('id', data.id);
                _this.get('session').set('token', data.token);
                _this.get('session').set('email', data.email);
                _this.get('session').set('is_admin', data.is_admin);
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
                    request.setRequestHeader('api_key', 'change_me_at_prod1');
                },
                crossDomain: true,
                dataType: 'json' 
                
            }).then((response) => {
                this.get('session').set('token',response.data.token);
                this.get('session').set('id',response.data.id);
                this.get('session').set('email',response.data.email);
                this.get('session').set('is_admin',response.data.is_admin);
                Ember.run(function() {
                    resolve({
                        token: response.data.token,
                        email: response.data.email,
                        id: response.data.id,
                        is_admin: response.data.is_admin
                    });
                });
            }, (xhr, status, error) => {
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