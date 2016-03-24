import Ember from 'ember';
// import LoginControllerMixin from 'ember-simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  authenticator: 'authenticator:custom',

  actions: {
    authenticate() {
    	console.log("[DEBUG] controllers/login.js::authenticate");
		let { identification, password } = this.getProperties('identification', 'password');
		// console.log("[DEBUG] identification = "+identification);
		// console.log("[DEBUG] password = "+password);

		//	Init errorMessage to undefined
		if (this.get('errorMessage')) {
			this.set('errorMessage', undefined);
		}
		
		var promise = this.get('session').authenticate('authenticator:custom', identification, password).catch((reason) => {
		this.set('errorMessage', reason.error || reason);
		});

		promise.then(fulfill, reject);

		function fulfill(answer) {
			console.log('The answer is ' + answer);
		}

		function reject(reason) {
		  	console.log("Couldnt get the answer! Reason: "+reason);
		}
		
    }
  }
});