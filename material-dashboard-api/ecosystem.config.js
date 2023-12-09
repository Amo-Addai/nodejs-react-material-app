module.exports = {
  apps: [
    {
      name: 'material-app-free-backend',
      script: './bin/www',

      watch: true,
      ignore_watch: ['public/**/*', 'views/**/*.ejs'],
    },
  ],
};
