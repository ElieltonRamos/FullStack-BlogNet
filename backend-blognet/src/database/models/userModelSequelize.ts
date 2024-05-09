import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class UsersModelSequelize extends Model<InferAttributes<UsersModelSequelize>,
InferCreationAttributes<UsersModelSequelize>> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
}

UsersModelSequelize.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
})

export default UsersModelSequelize;