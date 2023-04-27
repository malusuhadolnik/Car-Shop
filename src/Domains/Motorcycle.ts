import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motos: IMotorcycle) {
    super(motos);
    this.category = motos.category;
    this.engineCapacity = motos.engineCapacity;
  }
};

export default Motorcycle;