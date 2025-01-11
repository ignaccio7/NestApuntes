import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1705371409007 implements MigrationInterface {
    name = 'Init1705371409007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notice" ("id" SERIAL NOT NULL, "titulo" character varying(100) NOT NULL, "imagen" character varying NOT NULL, "lugar" character varying NOT NULL, "autor" character varying(100) NOT NULL, "contenido" character varying NOT NULL, "creation_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_705062b14410ff1a04998f86d72" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "notice"`);
    }

}
