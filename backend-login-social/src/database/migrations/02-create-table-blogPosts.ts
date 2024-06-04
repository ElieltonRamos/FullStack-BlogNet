import { Model, QueryInterface, DataTypes } from 'sequelize';
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
      image: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      created: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      updated: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('blog_posts');
  }
};