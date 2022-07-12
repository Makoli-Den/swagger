const express = require('express');
const cors = require('cors');
const swaggerApp = express();
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./openApi.json');

swaggerApp.use(cors());
swaggerApp.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocumentation, { swaggerOptions: { withCredentials: true } }));
swaggerApp.listen(3333, () => {
    console.log(`Application listening on port 3333!`);
});