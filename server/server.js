'use strict';

require('dotenv').config();
const loopback = require('loopback');
const boot = require('loopback-boot');
const Raven = require('raven');

const app = module.exports = loopback();

if (process.env.SENTRY_DSN) {
  Raven.config(process.env.SENTRY_DSN).install();
}

app.start = () => {
  // start the web server
  return app.listen(() => {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
    if (app.get('loopback-component-model-diagram')) {
      const diagramPath = app.get('loopback-component-model-diagram').mountPath;
      console.log('Model relational diagram at %s%s', baseUrl, diagramPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
