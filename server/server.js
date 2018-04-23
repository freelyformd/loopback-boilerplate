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
    // eslint-disable-next-line no-console
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      // eslint-disable-next-line no-console
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
    if (app.get('loopback-component-model-diagram')) {

      const {
        mountPath = '',
        exclude = [],
      } = app.get('loopback-component-model-diagram');

      // eslint-disable-next-line no-console
      console.log(
        'Model relational diagram at %s%s?exclude=%s',
        baseUrl,
        mountPath,
        exclude.join(',')
      );
    }
  });
};

boot(app, __dirname, err => {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
