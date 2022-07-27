import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import Router from './routes';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.get('/', (_req: Request, res: Response) => {
  return res.status(200).send("Boo! V3");
})

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
app.listen(8080, () => {
    console.log("Application listening on port 8080");
})