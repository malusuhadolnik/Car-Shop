import { Model, Schema, models,
  model, isValidObjectId } from 'mongoose';
  
abstract class AbstractODM<T> {
  protected model: Model<T>;
  private schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }
  
  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async listall() {
    return this.model.find();
  }

  public async findCarById(id: string): Promise<T | null | string> {
    if (!isValidObjectId(id)) {
      return 'invalid';
    }
    const target = this.model.findOne({ _id: id }, { __v: false });
    return target;
  }
}
  
export default AbstractODM;