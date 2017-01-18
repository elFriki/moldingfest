
import Ember from 'ember';

export default Ember.Controller.extend({

	appName: 'appName',
  hoy: new Date(),
  antes: "antes traducido",

	i18n: Ember.inject.service(),

	locale: Ember.computed.alias('i18n.locale'),
/*
	moment: Ember.inject.service(),

	beforeModel() {
		this.get('moment').changeLocale('es');
	},
*/


});
