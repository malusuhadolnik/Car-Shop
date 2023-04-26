import { Model, Schema, model, models, isValidObjectId, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;
  
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async listallCars() {
    return this.model.find();
  }

  public async findCarById(id: string): Promise<ICar | null | string> {
    if (!isValidObjectId(id)) {
      return 'invalid';
    }
    const target = this.model.findOne({ _id: id }, { __v: false });
    return target;
  }

  public async updateCarInfo(id: string, obj:ICar): Promise<ICar | null | string> {
    if (!isValidObjectId(id)) {
      return 'invalid';
    }
    const updated = this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<ICar>,
      { new: true },
    );
    return updated;
  }
}

export default CarODM;