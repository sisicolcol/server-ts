import { ChatRoom } from "../entity/ChatRoom";
import { AppDataSource } from "../config/datasource";

export const ChatRoomRepository =AppDataSource.getRepository(ChatRoom).extend({
    
})