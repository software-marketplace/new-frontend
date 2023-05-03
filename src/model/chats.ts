import { Schema, model } from 'mongoose';

interface ChatsInterface {
    sender: string;
    receiver: string;
    message: string;
    timestamp: number;
}

const chatsSchema = new Schema<ChatsInterface>({
    sender: {
        type: String,
        required: true,
    },
    receiver: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Number,
        required: true,
    },
});

const Chats = model<ChatsInterface>('Chats', chatsSchema);

export { Chats, ChatsInterface };
