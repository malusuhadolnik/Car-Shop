import IVehicle from "./IVehicle";
interface ICar extends IVehicle{
  // id?: string;
  // model: string;
  // year: number;
  // color:string;
  // status?: boolean;
  // buyValue: number;
  doorsQty: number;
  seatsQty: number;
}

export default ICar;