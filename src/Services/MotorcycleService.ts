import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createBikeDomain(bike: IMotorcycle | null): Motorcycle | null {
    if (bike) {
      return new Motorcycle(bike);
    }
    return null;
  }
    
  public async createBike(bike: IMotorcycle) {
    const bikeODM = new MotorcycleODM();
    const newBike = await bikeODM.create(bike);
    return this.createBikeDomain(newBike);
  }

  public async listBikes() {
    const bikeODM = new MotorcycleODM();
    const bikeList = await bikeODM.listall();
    return bikeList.map((bike) => this.createBikeDomain(bike));
  }
}

export default MotorcycleService;