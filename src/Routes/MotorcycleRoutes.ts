import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const bikeRoutes = Router();

bikeRoutes.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).createNewBike(),
);

bikeRoutes.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).listAllBikes(),
);

bikeRoutes.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

bikeRoutes.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

export default bikeRoutes;