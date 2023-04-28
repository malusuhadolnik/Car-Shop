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

const newInfo = {
  model: modelHornet,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

const updated = {
  id: '634852326b35b59438fbea2f',
  model: modelHornet,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

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

  it('Deve retornar uma moto quando uma id existente e válida é fornecida', async function () {
    sinon.stub(Model, 'findOne').resolves(expectedOutput);
    const service = new MotorcycleService();
    const result = await service.getBikeById('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(expectedOutput);
  });

  it('Deve retornar a informação atualizada do carro cuja id foi dada', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updated);
    const service = new MotorcycleService();
    const result = await service.updateById('634852326b35b59438fbea2f', newInfo as IMotorcycle);
    expect(result).to.be.deep.equal(updated);
  });
  it('Deve retornar um erro se a id passada para o update for inválida', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves({});
    try {
      const service = new MotorcycleService();
      await service.updateById('invalid_id', newInfo as IMotorcycle);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
  it('Deve retornar um erro se não houver carro com a id passada para o update', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves({});
    try {
      const service = new MotorcycleService();
      await service.updateById('6348513f34c397abcaXXX666', newInfo as IMotorcycle);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });
  
  afterEach(function () {
    sinon.restore();
  });
});