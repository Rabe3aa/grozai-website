const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar']
  },
  localePath: path.resolve('./public/locales'),
  debug: process.env.NODE_ENV === 'development'
};
