import {MigrationInterface, QueryRunner} from "typeorm";

export class users1575865604424 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `first_name` varchar(255) NULL, `last_name` varchar(255) NULL, `role` enum ('USER', 'ADMIN') NOT NULL DEFAULT 'USER', `email` varchar(255) NULL, `password` varchar(255) NULL, `phone` varchar(255) NULL, `avatar` varchar(255) NULL, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`", undefined);
        await queryRunner.query("DROP TABLE `users`", undefined);
    }

}
