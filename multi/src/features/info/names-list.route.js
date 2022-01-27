const axios = require('axios');
const { GET_PUBLIC_USERS } = require('./queries');

const namesListRoute = async (request, reply) => {
  const targetUrl = request.getConfig('apollo.client.config.uri');

  const res = await axios.post(targetUrl, {
    query: GET_PUBLIC_USERS
  });
  
  const names = res.data.data.users
    .map(user => user.name)
    .map(name => ({
        value: name.toUpperCase(),
    }));

  reply.send(names);
};

module.exports = namesListRoute;