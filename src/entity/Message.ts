import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Timestamp } from "typeorm";

@Entity('chat_room')
export class Message extends BaseEntity{
    @PrimaryGeneratedColumn()
    message_no:number; // 식별자

    @Column()
    room_no:number; // 채팅방 식별자

    @Column()
    sender_no:number; // 멤버 식별자

    @Column()
    reciver_no:number; // 멤버 식별자

    @Column() // default: varchar255
    content:string; 

    @Column()
    created_at:Timestamp;

    @Column()
    updated_at:Timestamp;

    @Column()
    status:number; // 0-활성화/1-삭제됨

}