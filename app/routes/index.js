import Ember from 'ember';

export default Ember.Route.extend({
/*
  moment: Ember.inject.service(),
	beforeModel() {
		this.get('moment').changeLocale('es');
	},
*/
  hoy: new Date(),
  antes: "antes"

});
