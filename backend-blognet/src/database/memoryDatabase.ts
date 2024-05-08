import modelDatabase from '../interfaces/modelDatabase';

type Identified<T> = T & {
  id: number;
};

class MemoryDatabase<Entity> implements modelDatabase<Entity> {
  protected memory: Identified<Entity>[] = [];
  protected idCounter = 0;

  async create(data: Entity) {
    const newUser = { ...data, id: this.idCounter };
    this.idCounter += 1;
    this.memory.push(newUser);
    return Promise.resolve(newUser);
  }

  async findAll() {
    const allUsers = [...this.memory];
    return Promise.resolve(allUsers);
  }

  async findById(id: number) {
    const user = this.memory.find((item) => item.id === id);
    if (!user) return Promise.resolve(null);
    return Promise.resolve(user);
  }

  async update(id: number, data: Entity): Promise<number> {
    const userIndex = this.memory.findIndex((item) => item.id === id);
    this.memory[userIndex] = { ...data, id };
    return Promise.resolve(1);
  }

  async delete(id: number): Promise<number> {
    const userIndex = this.memory.findIndex((item) => item.id === id);
    this.memory.splice(userIndex, 1);
    return Promise.resolve(1);
  }

}

export default MemoryDatabase;