// api.js

const jsonServer = require('json-server');
const morgan = require('morgan');

const api = jsonServer.create();
const apiEndpoints = jsonServer.router('server/data/db.json');

// Désactiver le logger existant
const middlewares = jsonServer.defaults({ logger: false });

// Ici on utilise notre propre logger
api.use(morgan('combined', { colors: true }));

api.use(middlewares);
api.use(apiEndpoints);

module.exports = {
  api
}