import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createNewCar(car: ICar) {
    // Criar instância da Model de Car usando Mongoose
    const carODM = new CarODM();
    // Inserir os dados no banco
    const newCar = await carODM.create(car);
    // Retornar os dados com id
    return this.createCarDomain(newCar);
  }
}
export default CarService;