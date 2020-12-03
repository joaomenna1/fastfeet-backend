import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>
  findByCpf(cpf: string): Promise<User | undefined>
  save(user: ICreateUserDTO): Promise<User>;
  create(data: ICreateUserDTO): Promise<User>;
}
