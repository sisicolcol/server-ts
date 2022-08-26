import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
const swaggerFile = require("./swagger-output");

const app = express();
app.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile),
    express.json()
);

export default app;