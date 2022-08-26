import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, Timestamp } from "typeorm";

@Entity()
export class ChatRoom extends BaseEntity{

    @PrimaryGeneratedColumn()
    chat_room_no:number; // 채팅방 식별자

    @Column()
    blind_user_no:number; // 사용자 (시각장애인) 식별자

    @Column()
    helper_no:number; // 사용자(헬퍼) 식별자

    @CreateDateColumn()
    created_at: Timestamp;

    @UpdateDateColumn()
    updated_at: Timestamp;

    @Column()
    status:number; // 0-활성화/1-삭제

}