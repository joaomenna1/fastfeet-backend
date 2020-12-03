import {MigrationInterface, QueryRunner, Table, Column} from "typeorm";

export default class CreateSignature1607006368945 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'SIGN_SIGNATURE',
          columns: [
            {
              name: 'SIGN_ID',
              type: 'int',
              isPrimary: true,
              generationStrategy: 'increment',
            },
            {
              name: 'SIGN_NAME',
              type: 'varchar'
            },
            {
              name: 'SIGN_PATH',
              type: 'varchar'
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
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('SIGN_SIGNATURE');
    }

}
