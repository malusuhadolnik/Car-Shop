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

  public async getBikeById(id: string) {
    const bikeODM = new MotorcycleODM();
    const targetBike = await bikeODM.findCarById(id);
    if (!targetBike || targetBike === 'invalid') {
      return targetBike;
    }
    return this.createBikeDomain(targetBike as IMotorcycle);
  }

  public async updateById(id: string, obj: IMotorcycle) {
    const bikeODM = new MotorcycleODM();
    const updated = await bikeODM.updateVehicleInfo(id, obj);
    if (!updated || updated === 'invalid') {
      return updated;
    }
    return this.createBikeDomain(updated as IMotorcycle);
  }
}

export default MotorcycleService;