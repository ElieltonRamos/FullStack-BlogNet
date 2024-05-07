import ServiceResponse from '../interfaces/serviceResponse';
import AbstractModel from '../models/abstractModel';

abstract class AbstractService<Entity> {
  constructor(
    protected model: AbstractModel<Entity>
  ) { }

  async create(data: Entity): Promise<ServiceResponse<Entity>> {
    const newEntity = await this.model.create(data);
    return { status: 'created', data: newEntity };
  }

  async listAll(): Promise<ServiceResponse<Entity[]>> {
    const allEntities = await this.model.listAll();
    return { status: 'ok', data: allEntities };
  }

  async find(id: number): Promise<ServiceResponse<Entity | null>> {
    const allEntities = await this.model.find(id);
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