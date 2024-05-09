import modelDatabase from '../interfaces/modelDatabase';

abstract class AbstractModel<entity> {

  constructor(
    protected model: modelDatabase<entity>
  ) { }

  async create(data: entity): Promise<entity> {
    const newEntity = await this.model.create(data);
    return newEntity;
  }

  async findAll(userId: number): Promise<entity[]> {
    const data = await this.model.findAll(userId);
    return data;
  }

  async findById(id: number): Promise<entity | null> {
    const data = await this.model.findById(id);
    return data;
  }

  async findOne(field: string, value: string): Promise<entity | null> {
    const data = await this.model.findOne(field, value);
    return data;
  }

  async update(id: number, data: entity): Promise<number> {
    const affectedRows = await this.model.update(id, data);
    return affectedRows;
  }

  async delete(id: number): Promise<number> {
    const affectedRows = await this.model.delete(id);
    return affectedRows;
  }
}

export default AbstractModel;