import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

const modelHornet = 'Honda Cb 600f Hornet';
const bikeInput: IMotorcycle = {
  model: modelHornet,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const expectedOutput: Motorcycle = new Motorcycle({
  id: '6348513f34c397abcad040b2',
  model: modelHornet,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

const expectedBikeList: IMotorcycle[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: modelHornet,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

describe('Testa os métodos CRUD implementados para Motos', function () {
  it('Deve criar uma nova moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(expectedOutput);
    const service = new MotorcycleService();
    const result = await service.createBike(bikeInput);
    expect(result).to.be.deep.equal(expectedOutput);
  });
  it('Deve listar todas as motos com sucesso', async function () {
    sinon.stub(Model, 'find').resolves(expectedBikeList);
    const service = new MotorcycleService();
    const result = await service.listBikes();
    expect(result).to.be.deep.equal(expectedBikeList);
  });
});