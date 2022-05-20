import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    // select: false,
  })
  password: string;
  //
  // @Column({
  //   type: 'boolean',
  //   default: false,
  // })
  // banned: boolean;
  //
  // @Column({
  //   type: 'varchar',
  //   nullable: true,
  // })
  // banReason: string;
}
