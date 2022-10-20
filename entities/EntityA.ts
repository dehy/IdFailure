import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class EntityA {
  @PrimaryGeneratedColumn()
  public id?: number | null;
}
