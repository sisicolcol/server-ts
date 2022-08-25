import { ChatRoom } from "../entity/chatroom.entity";
import { AppDataSource } from "../datasource";

export const ChatRoomRepository =AppDataSource.getRepository(ChatRoom).extend({
    
})