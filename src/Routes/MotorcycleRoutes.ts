import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const bikeRoutes = Router();

bikeRoutes.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).createNewBike(),
);

export default bikeRoutes;