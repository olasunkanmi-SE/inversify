import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("book")
export class Book {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column()
  public title!: string;
  @Column()
  public author!: string;
  @Column()
  public description!: string;
  @Column()
  public genre!: string;
  @Column()
  public year!: number;
}
