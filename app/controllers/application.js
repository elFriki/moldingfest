import Ember from 'ember';

export default Ember.Controller.extend({

	appName: 'appName',

	i18n: Ember.inject.service(),

	locale: Ember.computed.alias('i18n.locale'),

	moment: Ember.inject.service(),

	beforeModel() {
		this.get('moment').changeLocale('es');
	},

	menuLinks: [
		{ label: 'festivals', url: 'festivals' },
    { label: 'artists', url: 'artists' },
		{ label: 'contact', url: 'contact' }
	]


});
