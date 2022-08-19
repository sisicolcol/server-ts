import * as express from 'express';
import * as cors from "cors";
import * as helmet from "helmet";
import * as bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.json());

export default app;