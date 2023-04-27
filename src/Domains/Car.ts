import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(carro: ICar) {
    super(carro);
    this.doorsQty = carro.doorsQty;
    this.seatsQty = carro.seatsQty;
  }
}

export default Car;