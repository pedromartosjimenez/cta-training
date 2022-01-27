const whatDoWeDoRoute = require('./what-do-we-do.route');
const whoAreWeRoute = require('./who-are-we.route');
const namesListRoute = require('./names-list.route');

const infoFeature = {
  name: 'info',
  hook: '$FASTIFY_ROUTE',
  handler: [{
    method: 'GET',
    url: '/what',
    handler: whatDoWeDoRoute
  },{
    method: 'GET',
    url: '/who',
    handler: whoAreWeRoute
  },{
    method: 'POST',
    url: '/names',
    handler: namesListRoute
  }]
}

module.exports = infoFeature;