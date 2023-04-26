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

  public async listCars() {
    const carODM = new CarODM();
    const carList = await carODM.listallCars();
    return carList.map((car) => this.createCarDomain(car)); // o createCarDomain não recebe array como parâmetro!
  }

  public async getCarById(id: string) {
    const carODM = new CarODM();
    const targetCar = await carODM.findCarById(id);
    if (!targetCar || targetCar === 'invalid') {
      return targetCar;
    }
    return this.createCarDomain(targetCar as ICar);
  }

  public async updateById(id: string, obj: ICar) {
    const carODM = new CarODM();
    const updated = await carODM.updateCarInfo(id, obj);
    if (!updated || updated === 'invalid') {
      return updated;
    }
    return this.createCarDomain(updated as ICar);
  }
}
export default CarService;