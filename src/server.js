/* eslint-disable no-unused-vars */
// inisialisasikan Hapi Interface
// eslint-disable-next-line no-unused-vars
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// eslint-disable-next-line no-unused-vars
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    // eslint-disable-next-line no-undef
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
