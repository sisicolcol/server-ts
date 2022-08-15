import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('apply')
export class Apply extends BaseEntity{

    @PrimaryGeneratedColumn()
    apply_id!: number;

    @Column({type:'date'})
    service_date!: string;

    @Column()
    service_time!: number;

    @Column()
    start_point!:string;

    @Column()
    end_point!:string;

    @Column()
    duration!:number;

    @Column({type:"boolean"})
    way!:boolean;

    @Column({type:'text'})
    precaution!: string;

    @Column()
    mem_id!:number;
}