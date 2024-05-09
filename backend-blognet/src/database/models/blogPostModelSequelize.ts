import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class BlogPostModelSequelize extends Model<InferAttributes<BlogPostModelSequelize>,
InferCreationAttributes<BlogPostModelSequelize>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare content: string;
  declare userId: number;
  declare created: Date;
  declare updated: Date;
}

BlogPostModelSequelize.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
})

export default BlogPostModelSequelize;