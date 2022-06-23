import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { setupLogging } from './conf/logging';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

setupLogging(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
