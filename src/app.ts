import express, { Express } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import Router from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );

app.use(Router);

app.listen(port, () => {
    console.log("Application listening on port " + port);
})