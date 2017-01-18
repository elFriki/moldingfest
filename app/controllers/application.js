import Ember from 'ember';

export default Ember.Controller.extend({

	appName: 'appName',

	i18n: Ember.inject.service(),

	locale: Ember.computed.alias('i18n.locale'),

	moment: Ember.inject.service(),

  session: Ember.inject.service('session'),

	beforeModel() {
		this.get('moment').setLocale(this.get('locale'));
	},

	actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }

});
