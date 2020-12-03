import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUser1607004424411 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'US_USER',
        columns: [
          {
            name: 'US_ID',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'US_NAME',
            type: 'varchar'
          },
          {
            name: 'US_CPF',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'US_PASSWORD',
            type: 'varchar',
          },
          {
            name: 'US_DELIVERYMAN',
            type: 'boolean',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('US_USER');
  }
}
