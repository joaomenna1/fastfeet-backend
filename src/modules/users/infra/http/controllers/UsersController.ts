import { Request, Response } from "express";
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import { classToClass } from "class-transformer";

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {

    const { name ,cpf, password, deliveryman } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      cpf,
      password,
      deliveryman
    });

    return response.status(200).json(classToClass(user));
  }
}
