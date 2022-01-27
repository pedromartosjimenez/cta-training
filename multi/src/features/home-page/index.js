const homePageRoute = require('./home-page.route')

const homePageFeature = ({ registerAction }) => {
  console.log('hello world: marco, fran')

  registerAction({
    hook: '$FASTIFY_GET',
    handler: () => {
      console.log('building our home page...');

      return {
        url: '/',
        handler: homePageRoute
      }
    }
  });
};

module.exports = homePageFeature;