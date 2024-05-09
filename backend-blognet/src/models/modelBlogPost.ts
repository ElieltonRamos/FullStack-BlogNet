import BlogPostModelSequelize from '../database/models/blogPostModelSequelize';
import BlogPost from '../interfaces/blogPost';
import modelDatabase from '../interfaces/modelDatabase';

class BlogPostModel implements modelDatabase<BlogPost> {
  private model = BlogPostModelSequelize;

  async create(data: BlogPost): Promise<BlogPost> {
    const responseDB = await this.model.create(data);
    return responseDB.dataValues;
  }

  async findAll(userId: number): Promise<BlogPost[]> {
    const responseDB = await this.model.findAll({ where: { userId } });
    const postsByUser = responseDB.map((item) => item.dataValues);
    return postsByUser;
  }

  async findById(id: number): Promise<BlogPost | null> {
    const responseDB = await this.model.findByPk(id);
    if (responseDB === null) return null;
    return responseDB.dataValues;
  }

  async findOne(field: string, value: string): Promise<BlogPost | null> {
    const responseDB = await this.model.findOne({ where: { [field]: value } });
    if (responseDB === null) return null;
    return responseDB.dataValues;
  }

  async update(id: number, data: BlogPost): Promise<number> {
    const responseDB = await this.model.update(data, { where: { id } });
    return responseDB[0];
  }

  async delete(id: number): Promise<number> {
    const responseDB = await this.model.destroy({ where: { id } });
    return responseDB;
  }
}

export default BlogPostModel;