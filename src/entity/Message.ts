import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, Timestamp } from "typeorm";

@Entity()
export class Message extends BaseEntity{

    @PrimaryGeneratedColumn()
    message_no:number; // 식별자

    @Column()
    chat_room_no:number; // 채팅방 식별자

    @Column()
    sender_no:number; // 멤버 식별자

    @Column()
    reciver_no:number; // 멤버 식별자

    @Column() // default: varchar255
    content:string; 

    @CreateDateColumn()
    created_at: Timestamp;

    @UpdateDateColumn()
    updated_at: Timestamp;

    @Column()
    status:number; // 0-활성화/1-삭제됨

}