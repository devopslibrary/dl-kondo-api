import {MigrationInterface, QueryRunner} from "typeorm";

export class org1575590949844 implements MigrationInterface {
    name = 'org1575590949844'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "org" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "installationId" integer NOT NULL, "lastSynced" TIMESTAMP NOT NULL, CONSTRAINT "PK_703783130f152a752cadf7aa751" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "org"`, undefined);
    }

}
