const { runHookApp } = require("@forrestjs/hooks");
const envalid = require('envalid');

const apollo = require("@forrestjs/service-apollo");
const fastify = require("@forrestjs/service-fastify");
const fastifyHealthz = require("@forrestjs/service-fastify-healthz");

const homePage = require('./features/home-page');
const infoFeature = require('./features/info');
const multiplyFeature = require('./features/multiply');

const validateEnv = envalid.cleanEnv(process.env, {
  NODE_ENV: envalid.str({
    choices: ['development', 'production']
  }),
  FASTIFY_PORT: envalid.num({
    desc: 'local port where to run fastify',
    default: 4000
  }),
  HASURA_ENDPOINT: envalid.str({
    desc: 'full URL TO A gRAPHql api'
  })
});
console.log(validateEnv);

runHookApp({
  trace: "compact",
  settings: {
    fastify: {
      port: validateEnv.FASTIFY_PORT
    },
    apollo: {
      client: {
        config: {
          uri: validateEnv.HASURA_ENDPOINT
        }
      }
    }
  },
  services: [
    apollo,
    fastify, 
    fastifyHealthz
  ],
  features: [
    homePage,
    infoFeature,
    multiplyFeature
  ]
}).catch(console.error);