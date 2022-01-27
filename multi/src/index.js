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