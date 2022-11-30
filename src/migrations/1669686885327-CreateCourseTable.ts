import { Column, MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCourseTable1669686885327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
            {
                name: 'courses',
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
                        name: 'description',
                        type: 'timestamp',
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
        await queryRunner.dropTable('courses');
    }

}
