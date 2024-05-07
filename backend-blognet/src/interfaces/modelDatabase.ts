interface modelDatabase<entity> {
  create(data: entity): Promise<entity>
  findAll(): Promise<entity[]>
  findById(id: number): Promise<entity | null>
  update(id: number, data: entity): Promise<number>
  delete(id: number): Promise<number>
}

export default modelDatabase;