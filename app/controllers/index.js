import Ember from 'ember';

export default Ember.Controller.extend({

	appName: 'appName',
  hoy: new Date(),
	application: Ember.inject.controller('application')



});
