import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>
  findByCpf(cpf: number): Promise<User | undefined>
  save(user: ICreateUserDTO): Promise<User>;
  create(data: ICreateUserDTO): Promise<User>;
}
