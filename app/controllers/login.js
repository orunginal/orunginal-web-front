import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  authenticator: 'authenticator:custom',

  actions: {
    authenticate() {
    	console.log("[DEBUG] controllers/login.js::authenticate");

		//let { identification, password } = this.getProperties('identification', 'password');
		// console.log("[DEBUG] identification = "+identification);
		// console.log("[DEBUG] password = "+password);

		//	Init errorMessage to undefined
		if (this.get('errorMessage')) {
			this.set('errorMessage', undefined);
		}

		var _this = this;

		var promise = this.get('session').authenticate('authenticator:custom', "test@test.com", "password").catch((reason) => {
		this.set('errorMessage', reason.error || reason);
		});

		promise.then(
			function () {
				// 	Succes, redirect to dashboard
				_this.transitionToRoute('user.dashboard');
			},

			function (error) {
			  	console.log("Couldnt get the answer! Reason: "+error);
			}
		);
		

    }
  }
});