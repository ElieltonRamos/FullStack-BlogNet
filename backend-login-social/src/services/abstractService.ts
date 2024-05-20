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

  async listAll(_sorted: string, _userId: number): Promise<ServiceResponse<Entity[]>> {
    const allEntities = await this.model.findAll();
    return { status: 'ok', data: allEntities };
  }

  async find(postId: number, _userId: number): Promise<ServiceResponse<Entity | null>> {
    const entity = await this.model.findById(postId);
    return { status: 'ok', data: entity };
  }

  async update(id: number, data: Entity): Promise<ServiceResponse<Entity>> {
    const affectedRows = await this.model.update(id, data);
    if (affectedRows === 0) return { status: 'serverError', data: { message: 'internal error' } };
    return { status: 'noContent', data };
  }

  async delete(id: number, _userId: number): Promise<ServiceResponse<string | Entity>> {
    const affectedRows = await this.model.delete(id);
    if (affectedRows === 0) return { status: 'serverError', data: { message: 'internal error' } };
    return { status: 'noContent', data: 'deleted' };
  }
}

export default AbstractService;