import Ember from 'ember';

export default Ember.Controller.extend({

	appName: 'appName',
  hoy: new Date(),

	i18n: Ember.inject.service(),

	moment: Ember.inject.service(),

	locale: Ember.computed.alias('i18n.locale'),

	beforeModel() {
		this.get('moment').changeLocale(this.get('locale'));
	}

});
