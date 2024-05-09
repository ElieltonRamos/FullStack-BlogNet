import { Request, Response } from 'express';
import AbstractService from '../services/abstractService';
import mapStatusHTTP from '../utils/mapStatusHTPP';

abstract class AbstractController<entity> {

  constructor(
    protected service: AbstractService<entity>,
    protected messageError = 'Server Error',
  ) { }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body;
      const { status, data } = await this.service.create(body);
      return res.status(mapStatusHTTP(status)).send(data);
    } catch (error) {
      return res.status(500).send({ message: this.messageError});
    }
  }

  async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const { user } = req.body;
      const { status, data } = await this.service.listAll(user.userId);
      return res.status(mapStatusHTTP(status)).send(data);
    } catch (error) {
      return res.status(500).send({ message: this.messageError });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const { status, data } = await this.service.find(id);
      return res.status(mapStatusHTTP(status)).send(data);
    } catch (error) {
      return res.status(500).send({ message: this.messageError });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const { status, data } = await this.service.update(id, body);
      return res.status(mapStatusHTTP(status)).send(data);
    } catch (error) {
      return res.status(500).send({ message: this.messageError });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const { status, data } = await this.service.delete(id);
      return res.status(mapStatusHTTP(status)).send(data);
    } catch (error) {
      return res.status(500).send({ message: this.messageError });
    }
  }
}

export default AbstractController;