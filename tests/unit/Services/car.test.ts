import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};
const expectedResult: Car = new Car({
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
});

const expectedCarList: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

describe('Testa o CRUD dos carros', function () {
  it('Deve criar um novo carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(expectedResult);
    const service = new CarService();
    const result = await service.createNewCar(carInput);
    expect(result).to.be.deep.equal(expectedResult);
  });
  it('Deve listar todos os carros com sucesso', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves(expectedCarList);
    // Act
    const service = new CarService();
    const result = await service.listCars();
    // Assert
    expect(result).to.be.deep.equal(expectedCarList);
  });
  it('Deve retornar um carro com sucesso', async function () {
    sinon.stub(Model, 'findOne').resolves(expectedResult);
    const service = new CarService();
    const result = await service.getCarById('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(expectedResult);
  });
  it('Deve retornar um erro se a id passada for inválida', async function () {
    sinon.stub(Model, 'findOne').resolves({});
    try {
      const service = new CarService();
      await service.getCarById('invalid_id');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
  it('Deve retornar um erro se não houver carro com a id passada', async function () {
    sinon.stub(Model, 'findOne').resolves({});
    try {
      const service = new CarService();
      await service.getCarById('6348513f34c397abcaXXX666');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });
  afterEach(function () {
    sinon.restore();
  });  
});