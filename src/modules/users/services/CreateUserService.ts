import { inject, injectable } from "tsyringe";

import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUserRepository';
import IHashUser from '../hashPassword/model/IHashUser';

interface IRequest {
  cpf: string;
  password: string;
  deliveryman: boolean;
}
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUsersRepository,

    @inject('HashUser')
    private hashUser: IHashUser
  ) {}

  public async execute({cpf, password, deliveryman}: IRequest): Promise<User> {
    const checkUserCpfExists = await this.userRepository.findByCpf(cpf);

    if (checkUserCpfExists) {
      throw new AppError('Cpf already user.');
    }

    const hashedPassword = await this.hashUser.generateHash(password);

    if (deliveryman === undefined) {
      deliveryman = false;
    }
    const user = this.userRepository.create({
      cpf,
      password: hashedPassword,
      deliveryman
    });

    return user;
  }
}

export default CreateUserService;
