import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).createNewCar(),
);

carRoutes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).listAllCars(),
);

carRoutes.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).getCarById(),
);

carRoutes.put(
  '/:id',
  (req, res, next) => new CarController(req, res, next).updateById(),
);

export default carRoutes;