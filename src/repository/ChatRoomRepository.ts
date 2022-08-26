import { ChatRoom } from "../entity/ChatRoom";
import { AppDataSource } from "../datasource";

export const ChatRoomRepository =AppDataSource.getRepository(ChatRoom).extend({
    
})