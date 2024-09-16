import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('events')
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column('varchar')
    description?: string;

    @Column('date')
    when?: Date;

    @Column('varchar')
    address?: string;
}