import modelDatabase from '../interfaces/modelDatabase';
import ServiceResponse from '../interfaces/serviceResponse';
import { Token } from '../interfaces/user';

abstract class AbstractService<Entity> {
  constructor(
    protected model: modelDatabase<Entity>
  ) { }

  async create(data: Entity): Promise<ServiceResponse<Entity | Token >> {
    const newEntity = await this.model.create(data);
    return { status: 'created', data: newEntity };
  }

  async listAll(userId: number): Promise<ServiceResponse<Entity[]>> {
    const allEntities = await this.model.findAll(userId);
    return { status: 'ok', data: allEntities };
  }

  async find(id: number): Promise<ServiceResponse<Entity | null>> {
    const allEntities = await this.model.findById(id);
    return { status: 'ok', data: allEntities };
  }

  async update(id: number, data: Entity): Promise<ServiceResponse<number>> {
    const affectedRows = await this.model.update(id, data);
    return { status: 'noContent', data: affectedRows };
  }

  async delete(id: number): Promise<ServiceResponse<number>> {
    const affectedRows = await this.model.delete(id);
    return { status: 'noContent', data: affectedRows };
  }
}

export default AbstractService;