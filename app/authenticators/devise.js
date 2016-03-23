import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
	serverTokenEndpoint: 'https://orunginal-api.herokuapp.com/users/sign_in'
});