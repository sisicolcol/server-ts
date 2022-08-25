import { Message } from "../entity/Message";
import { AppDataSource } from "../datasource";

export const ChatRoomRepository =AppDataSource.getRepository(Message).extend({
    
})