import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Timestamp } from "typeorm";

@Entity('chat_room')
export class ChatRoom extends BaseEntity{
    @PrimaryGeneratedColumn()
    chat_room_no:number; // 식별자

    @Column()
    user_no:number; // 사용자(시각장애인) 식별자

    @Column()
    helper_no:number; // 사용자(헬퍼) 식별자

    @Column()
    created_at:Timestamp;

    @Column()
    updated_at:Timestamp;

    @Column()
    status:number; // 0-활성화/1-삭제

}