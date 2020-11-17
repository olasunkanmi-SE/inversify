import { MigrationInterface, QueryRunner } from "typeorm";

export class v11605432681779 implements MigrationInterface {
  name = "v11605432681779";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying(256) NOT NULL, "author" character varying(256) NOT NULL, "description" character varying(256) NOT NULL, "genre" character varying(256) NOT NULL, "year" integer NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "books"`);
  }
}
