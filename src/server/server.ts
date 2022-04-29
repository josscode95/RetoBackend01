import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import keys from '../keys';
import dbConnection from '../database/config';

export default class Server{
  
  public app:express.Application;
  public port:number;
  public paths:any;

  constructor(){

    this.port = Number(keys.PORT);
    this.app = express();
    this.paths = {
      clients: '/api/clients'
    }

    this.conectarDB();

    this.middlewares();

    this.routes();

  }

  private async conectarDB(){
    await dbConnection();
  }

  public middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}))
    this.app.use(morgan('dev'));
  }

  public routes(){
    this.app.use(this.paths.clients, require('../routes/clients'));
  }

  public listen(){
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo el puerto', this.port);
    })
  }

}
