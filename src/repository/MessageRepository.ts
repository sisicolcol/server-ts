import { Message } from "../entity/Message";
import { AppDataSource } from "../config/datasource";

export const ChatRoomRepository =AppDataSource.getRepository(Message).extend({
    
})