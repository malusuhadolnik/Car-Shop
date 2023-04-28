import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async createNewBike() {
    let bikeStatus = false;
    if (this.req.body.status) {
      bikeStatus = true;
    }

    const bike: IMotorcycle = {
      ...this.req.body,
      status: bikeStatus,
    };

    try {
      const newMotorcycle = await this.service.createBike(bike);
      return this.res.status(201).json(newMotorcycle);
    } catch (err) {
      this.next(err);
    }
  }

  public async listAllBikes() {
    try {
      const bikesList = await this.service.listBikes();
      return this.res.status(200).json(bikesList);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;