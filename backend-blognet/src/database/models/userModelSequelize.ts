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
  declare name: string;
  declare email: string;
  declare password: string;
  declare image: CreationOptional<string>;
}

UsersModelSequelize.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
})

export default UsersModelSequelize;