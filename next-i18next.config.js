const path = require('path')

module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh'],
      // 如果你不希望自动语言检测，可以设置为 false
      localeDetection: false,

    },
    localePath: path.resolve('./public/locales'),
    // react: { useSuspense: false },//this line
    shallowRender: true,


  };