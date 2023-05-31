import 'dotenv/config';

export default {
  expo: {
    scheme: 'acme',
    web: {
      bundler: 'metro',
    },
    name: 'news-app',
    slug: 'news-app',
    extra: {
      eas: {
        projectId: '1f11beae-7879-4bd3-b529-1d9488dabb76',
      },
    },
    android: {
      package: 'com.yourcompany.yourappname',
      versionCode: 1,
    },
    splash: {
      image: './assets/icons/news.png',
    },
  },
};
