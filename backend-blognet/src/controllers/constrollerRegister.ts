import { Request, Response } from 'express';
import ServiceRegister from '../services/serviceRegister';
import mapStatusHTTP from '../utils/mapStatusHTPP';

class ConstrollerRegister {
  constructor(
    private service: ServiceRegister,
    private messageError = 'Internal server error'
  ) {}

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password, name } = req.body;
      const { status, data } = await this.service.create({ email, password, name });
      return res.status(mapStatusHTTP(status)).send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: this.messageError });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const { user } = req.body;
      const { status, data } = await this.service.find(user.id);
      return res.status(mapStatusHTTP(status)).send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: this.messageError });
    }
  }
}

export default ConstrollerRegister;