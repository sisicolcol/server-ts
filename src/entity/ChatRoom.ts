import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm"

@Entity('chat_room')
export class ChatRoom extends BaseEntity{
    @PrimaryGeneratedColumn()
    mem_no:number;

    @Column()
    mem_id:string;

    @Column()
    password:string;

    @Column()
    mem_name:string;

    @Column()
    mem_phone:string;

    @Column()
    mem_gender:string;

    @Column()
    mem_card:string;

    @Column()
    mem_address:string;

    @Column()
    mem_cert:string;

    @Column()
    mem_type:boolean;
    
}