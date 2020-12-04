import { inject, injectable } from "tsyringe";

import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashUser from '../hashPassword/model/IHashUser';

interface IRequest {
  name: string;
  cpf: number;
  password: string;
  deliveryman: boolean;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,

    @inject('HashUser')
    private hashUser: IHashUser
  ) {}

  public async execute({ name ,cpf, password, deliveryman}: IRequest): Promise<User> {
    const checkUserCpfExists = await this.userRepository.findByCpf(cpf);
    console.log(checkUserCpfExists);
    if (checkUserCpfExists) {
      throw new AppError('Cpf already user.');
    }

    const hashedPassword = await this.hashUser.generateHash(password);

    const user = this.userRepository.create({
      name,
      cpf,
      password: hashedPassword,
      deliveryman
    });

    return user;
  }
}

export default CreateUserService;
