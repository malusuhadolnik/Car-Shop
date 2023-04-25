class Cars {
  protected id: string | undefined; 
  protected model: string;
  protected year: number;
  protected color:string;
  protected status: boolean;
  protected buyValue: number;
  // private doorsQty: number;
  // private seatsQty: number;

  constructor(
    id: string | undefined,
    model: string,
    year: number,
    color: string,
    status: boolean,
    buyValue: number,
    // doorsQty: number,
    // seatsQty: number,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    // this.doorsQty = doorsQty;
    // this.seatsQty = seatsQty;
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

export default Cars;