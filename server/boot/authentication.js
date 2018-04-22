'use strict';

module.exports = app => {
  // enable authentication
  app.enableAuth();

  if (process.env.ENABLE_PASSPORT_AUTH === 'true') {
    const {PassportConfigurator} = require('loopback-component-passport');

    const passportConfigurator = new PassportConfigurator(app);

    passportConfigurator.init();
    passportConfigurator.setupModels({
      userModel: app.models.Person,
      userIdentityModel: app.models.UserIdentity,
      userCredentialModel: app.models.UserCredential,
    });

    const config = require('../providers.local.js');

    Object.keys(config).forEach(strategyName => {
      const strategy = config[strategyName];
      strategy.session = strategy.session !== false;
      passportConfigurator.configureProvider(strategyName, strategy);
      // eslint-disable-next-line no-console
      console.log('Configured %s passport strategy', strategyName);
    });
  }
};
