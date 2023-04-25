import ICar from '../Interfaces/ICar';

class Car {
  protected id?: string | undefined; 
  protected model: string;
  protected year: number;
  protected color:string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(carro: ICar) { // se tipamos um a um, retorna erro de lint! permite só até 6 params no constructor
    this.model = carro.model;
    this.year = carro.year;
    this.color = carro.color;
    this.status = carro.status;
    this.buyValue = carro.buyValue;
    this.doorsQty = carro.doorsQty;
    this.seatsQty = carro.seatsQty;
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

  // private getDoors() {
  //   return this.doorsQty;
  // };

  // private getSeats() {
  //   return this.seatsQty;
  // };
}

export default Car;