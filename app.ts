import * as express from 'express';

// Create and configures an ExpressJS web server.
class App {
  // Ref to Express instance.
  public express: express.Application;

  // Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
  }

  // Configure API endpoints.
  private routes(): void {
    /* 
    This is just to get up and running, and to make sure what we've got is
    working so far. This function will change when we start to add more
    API endpoints
    */
    let router = express.Router();

    // Placeholder route handler
    router.get('/', (req, res, next) => {
      res.send(
        `<html>
          <head>
            <title>Tutorial: Hello World</title>
          </head>
          <body>
            <h1>Hello World Tutorial</h1>
            <p>
              The current date and time is: <strong>`+new Date()+`</strong>
            </p>
          </body>
         </html>`
      );
    });
    this.express.use('/', router);
  }
}
export default new App().express;