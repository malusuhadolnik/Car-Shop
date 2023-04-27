import { Model, Schema, model, models, isValidObjectId, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar>{
  constructor() {
  // Bloco refatorado:
   const schema = new Schema<ICar>({
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    status: { type: Boolean, required: true },
    buyValue: { type: Number, required: true },
    doorsQty: { type: Number, required: true },
    seatsQty: { type: Number, required: true },
  });
  super(schema, 'Car');
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