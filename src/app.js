import express from "express";
import cors from 'cors';
import routes from "./routes.js";
import "./config/database.js"
import bodyParser from "body-parser"
import dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

class App{
    constructor() {
        this.server = express();

        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.server.enable('trust proxy', true);
        this.server.use(cors());
        this.server.use(bodyParser.json());
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}
export default new App().server;