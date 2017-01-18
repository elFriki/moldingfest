import Ember from 'ember';

export default Ember.Component.extend({

  appName: 'molding-fest',
  app: 'molding-fest',

  menuLinks: [
    {
      label: 'festivals',
      url: 'festivals'
    },
    {
      label: 'artists',
      url: 'artists'
    }
  ],

  languages: [
		{ name: 'ES', code: 'es', flagUrl: 'http://www.ember-power-select.com/flags/es.svg' },
		{ name: 'UK', code: 'en', flagUrl: 'http://www.ember-power-select.com/flags/gb.svg' },
		{ name: 'FR', code: 'fr', flagUrl: 'http://www.ember-power-select.com/flags/fr.svg' },
		{ name: 'PT', code: 'pt', flagUrl: 'http://www.ember-power-select.com/flags/pt.svg' }
	],

	selectedLanguage: Ember.computed('languages', 'locale',
		function(){
			return this.languages.findBy('code', this.get('locale'));
	}),

  isMenuOpened: false,

	dropdownOpen: false,

	i18n: Ember.inject.service(),

  moment: Ember.inject.service(),

	locale: Ember.computed.alias('i18n.locale'),

	actions: {

		changeLocale(param) {
			this.get('i18n').set('locale', param);
      this.get('moment').changeLocale(param);
      this.toggleProperty('dropdownOpen');
		},

		toggleMenu(){
			this.toggleProperty('isMenuOpened');
		},

	    toggleDropdown() {
	        this.toggleProperty('dropdownOpen');
    	}

	}
});
