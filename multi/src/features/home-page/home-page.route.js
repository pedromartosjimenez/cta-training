const gql = require('graphql-tag');

const GET_PUBLIC_USERS = gql`
  query getUsers {
    users {
      name
    }
}
`;

const homePageRoute = async (request, reply) => {
  const res = await request.apollo.query({
    query: GET_PUBLIC_USERS,
    fetchPolicy: "no-cache"
  });
  const names = res.data.users
    .map(user => user.name)
    .join(', ');

  console.log(request.apollo);
  reply.send(`Hello World ${names}`);
};

module.exports = homePageRoute;