interface modelDatabase<entity> {
  create(data: entity): Promise<entity>
  findAll(userId: number): Promise<entity[]>
  findById(id: number): Promise<entity | null>
  findOne(field: string, value: string): Promise<entity | null>
  update(id: number, data: entity): Promise<number>
  delete(id: number): Promise<number>
}

export default modelDatabase;