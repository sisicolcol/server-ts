import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm"

@Entity('chat_room')
export class ChatRoom extends BaseEntity{
    @PrimaryGeneratedColumn()
    chat_room_no:number;

    @Column()
    user_1:number;

    @Column()
    user_2:number;

    @Column()
    status:number;
}