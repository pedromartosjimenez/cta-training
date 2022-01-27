const multiplyRoute = (request, reply) => {
  console.log(request.body);

  if (request.body.input.num1 === 5) {
    reply.status(418).send({
      message: 'we do not like n.5',
      extensions: {
        path: "$.input.num1",
        code: 123
      },
    })
  }

  const result = request.body.input.num1 * request.body.input.num2;

  reply.send({ result });
};

module.exports = multiplyRoute;