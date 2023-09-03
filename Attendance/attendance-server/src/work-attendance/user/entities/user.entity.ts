import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // This specifies the table name in the database
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string; // You might use an enum or reference another table for roles
  name: any;

  // You can add more properties and methods as needed
}
