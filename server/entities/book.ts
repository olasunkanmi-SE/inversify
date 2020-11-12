import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column()
  public title!: string;
  @Column()
  public year!: number;
}
