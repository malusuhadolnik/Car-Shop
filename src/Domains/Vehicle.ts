import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color:string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(carro: IVehicle) {
    this.id = carro.id;
    this.model = carro.model;
    this.year = carro.year;
    this.color = carro.color;
    this.status = carro.status;
    this.buyValue = carro.buyValue;
  }

  protected setId(id: string) {
    this.id = id;
  }

  protected getId() {
    return this.id;
  }

  protected setModel(model: string) {
    this.model = model;
  }

  protected getModel() {
    return this.model;
  }

  protected setYear(year: number) {
    this.year = year;
  }

  protected getYear() {
    return this.year;
  }

  protected setColor(color: string) {
    this.color = color;
  }

  protected getColor() {
    return this.color;
  }

  protected setStatus(status: boolean) {
    this.status = status;
  }

  protected getStatus() {
    return this.status;
  }

  protected setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }
    
  protected getBuyValue() {
    return this.buyValue;
  }
}

export default Vehicle;