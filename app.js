import express from 'express';
import routes from './routes/route';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.listen(3000, () => {
      console.log("Example app listening at http://localhost:3000");
    });
  }
}

export default new App().server;
