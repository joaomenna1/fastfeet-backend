import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUser1607004424411 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'US_USER',
        columns: [
          {
            name: 'US_ID',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'US_NAME',
            type: 'varchar'
          },
          {
            name: 'US_CPF',
            type: 'int',
          },
          {
            name: 'US_PASSWORD',
            type: 'varchar',
          },
          {
            name: 'US_DELIVERYMAN',
            type: 'boolean',
            default: false,
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
