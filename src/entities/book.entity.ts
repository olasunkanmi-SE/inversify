import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "books" })
export class Book {
  @PrimaryGeneratedColumn({ type: "integer" })
  public id!: number;
  @Column({ type: "varchar", length: 256 })
  public title!: string;
  @Column({ type: "varchar", length: 256 })
  public author!: string;
  @Column({ type: "varchar", length: 256 })
  public description!: string;
  @Column({ type: "varchar", length: 256 })
  public genre!: string;
  @Column({ type: "integer" })
  public year!: number;
}
