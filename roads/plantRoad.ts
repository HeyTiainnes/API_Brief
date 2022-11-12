import { Router } from "express";
import plantController from "../controller/plantController";


const plantRoads = Router();
const PlantController = new plantController(); // PlantController avec une majuscule, sinon conflit avec import plantController

plantRoads.get('/', (req, res) => {});
export default plantRoads;