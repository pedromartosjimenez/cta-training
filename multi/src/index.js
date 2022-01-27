const { runHookApp } = require("@forrestjs/hooks");
const apollo = require("@forrestjs/service-apollo");
const fastify = require("@forrestjs/service-fastify");
const fastifyHealthz = require("@forrestjs/service-fastify-healthz");

const homePage = require('./features/home-page');
const infoFeature = require('./features/info');
const multiplyFeature = require('./features/multiply');

runHookApp({
  trace: "compact",
  settings: {
    fastify: {
      port: 4000
    }
  },
  apollo: {
    client: {
      config: {
        uri: "https://8080-pedromartosjime-ctatrain-o2jgdryujch.ws-eu29.gitpod.io/v1/graphql"
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