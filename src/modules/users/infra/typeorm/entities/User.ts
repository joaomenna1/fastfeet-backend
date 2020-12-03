import { CreateDateColumn, UpdateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('US_USER')
class User {
  @PrimaryGeneratedColumn('increment', { name: 'US_ID' })
  id: Number;

  @Column({ name: 'US_NAME' })
  name: string;

  @Column({ name: 'US_CPF' })
  cpf: string;

  @Column({ name: 'US_PASSWORD' })
  password: string;

  @Column({ name: 'US_DELIVERYMAN' })
  deliveryman: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
