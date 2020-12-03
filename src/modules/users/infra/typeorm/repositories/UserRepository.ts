import { getRepository, Repository, Not } from 'typeorm';
import IUsersRepositories from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';


class UserRepository implements IUsersRepositories {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByCpf(cpf: string): Promise<User | undefined> {
    const user_cpf = await this.ormRepository.findOne(cpf);

    return user_cpf;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    if (userData.deliveryman === null) {
      userData.deliveryman = false;
    }

    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }


}

export default UserRepository;
