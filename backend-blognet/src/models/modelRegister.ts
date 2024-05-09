import UsersModelSequelize from '../database/models/userModelSequelize';
import modelDatabase from '../interfaces/modelDatabase';
import User from '../interfaces/user';

class RegisterUserModel implements modelDatabase<User> {
  private model = UsersModelSequelize;

  async create(data: User): Promise<User> {
    const responseDB = await this.model.create(data);
    return responseDB.dataValues;
  }

  async findAll(userId: number): Promise<User[]> {
    const responseDB = await this.model.findAll({ where: { id: userId } });
    const postsByUser = responseDB.map((item) => item.dataValues);
    return postsByUser;
  }

  async findById(id: number): Promise<User | null> {
    const responseDB = await this.model.findByPk(id);
    if (responseDB === null) return null;
    return responseDB.dataValues;
  }

  async findOne(field: string, value: string): Promise<User | null> {
    const responseDB = await this.model.findOne({ where: { [field]: value } });
    if (responseDB === null) return null;
    return responseDB.dataValues;
  }

  async update(id: number, data: User): Promise<number> {
    const responseDB = await this.model.update(data, { where: { id } });
    return responseDB[0];
  }

  async delete(id: number): Promise<number> {
    const responseDB = await this.model.destroy({ where: { id } });
    return responseDB;
  }
}

export default RegisterUserModel;