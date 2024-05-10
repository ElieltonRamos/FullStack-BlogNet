import { Model, QueryInterface, DataTypes } from 'sequelize';
import User from '../../interfaces/user';
import BlogPost from '../../interfaces/blogPost';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<BlogPost>>('blog_posts', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
        unique: true,
      },
      created: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('blog_posts');
  }
};