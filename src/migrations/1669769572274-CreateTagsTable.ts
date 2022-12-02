import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTagsTable1669769572274 implements MigrationInterface {
    name = 'CreateTagsTable1669769572274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table(
            {
                name: 'tags',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                         name: 'name',
                        type: 'varchar',      
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP'
                    }
                 ]
            }
        )
       );     
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tags');
    }

}
