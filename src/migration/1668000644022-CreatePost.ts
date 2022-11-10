import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableIndex,
    TableColumn,
    TableForeignKey,
} from "typeorm";

export class QuestionRefactoringTIMESTAMP implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "title",
                        type: 'varchar'
                    },
                    {
                        name: 'content',
                        type: 'text'
                    }
                ],
            }),
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('posts');
    }
}