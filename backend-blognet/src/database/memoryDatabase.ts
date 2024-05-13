import modelDatabase from '../interfaces/modelDatabase';

type Identified<T> = T & {
  id: number;
  userId?: number;
};

class MemoryDatabase<Entity> implements modelDatabase<Entity> {
  public memory: Identified<Entity>[] = [];
  protected idCounter = 1;

  async create(data: Entity) {
    const newEntity = { ...data, id: this.idCounter };
    this.idCounter += 1;
    this.memory.push(newEntity);
    return Promise.resolve(newEntity);
  }

  async findAll(userId: number) {
    const allEntities = this.memory.filter((item) => item.userId === userId);
    return Promise.resolve(allEntities);
  }

  async findById(id: number) {
    const entity = this.memory.find((item) => item.id === id);
    if (!entity) return Promise.resolve(null);
    return Promise.resolve(entity);
  }

  async findOne(field: string, value: string): Promise<Entity | null> {
    const entity = this.memory.find((item) => item[field as keyof Entity] === value);
    if (!entity) return Promise.resolve(null);
    return Promise.resolve(entity);
  }

  async update(id: number, data: Entity): Promise<number> {
    const entityIndex = this.memory.findIndex((item) => item.id === id);
    this.memory[entityIndex] = { ...data, id };
    return Promise.resolve(1);
  }

  async delete(id: number): Promise<number> {
    const entityIndex = this.memory.findIndex((item) => item.id === id);
    this.memory.splice(entityIndex, 1);
    return Promise.resolve(1);
  }

}

export default MemoryDatabase;