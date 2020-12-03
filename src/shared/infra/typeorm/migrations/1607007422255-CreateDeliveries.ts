import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateDeliveries1607007422255 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'DEL_DELIVERIES',
          columns: [
            {
              name: 'DEL_ID',
              type: 'int',
              isPrimary: true,
              generationStrategy: 'increment',
            },
            {
              name: 'DEL_US_ID',
              type: 'int'
            },
            {
              name: 'DEL_SIGN_ID',
              type: 'int'
            },
            {
              name: 'DEL_PRODUCT',
              type: 'varchar'
            },
            {
              name: 'DEL_POSTAL_CODE',
              type: 'varchar'
            },
            {
              name: 'DEL_NEIGHBORHOAD',
              type: 'varchar'
            },
            {
              name: 'DEL_CITY',
              type: 'varchar'
            },
            {
              name: 'DEL_STATE',
              type: 'varchar'
            },
            {
              name: 'DEL_CANCELED',
              type: 'timestamp',
              default: 'now()',

            },
            {
              name: 'DEL_START_DATE',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'DEL_END_DATE',
              type: 'timestamp',
              default: 'now()'
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
          foreignKeys: [
            {
              name: 'UserId',
              columnNames: ['DEL_US_ID'],
              referencedColumnNames: ['US_ID'],
              referencedTableName: 'US_USER',
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL'
            },
            {
              name: 'SignatureId',
              columnNames: ['DEL_SIGN_ID'],
              referencedColumnNames: ['SIGN_ID'],
              referencedTableName: 'SIGN_SIGNATURE',
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL'
            }
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('DEL_DELIVERIES');
    }
}
