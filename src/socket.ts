import { Server as SocketIOServer, Socket } from "socket.io";
import { verify } from "jsonwebtoken";
import config from "./config";
import { ChatsInterface } from "./model/chats";
import { Chats } from "./model";

export default class ChatServer {
    private io: SocketIOServer;

    constructor(server: any) {
        this.io = new SocketIOServer(server);
        this.listen();
    }

    private listen(): void {

        // Authnticate user
        this.io.use((socket: any, next: any) => {
            const token: string = socket.handshake.auth.token;
            if (!token) {
                return next(new Error("invalid token"));
            }

            verify(token,
                config.JWT_SECRET,
                (err: any, decoded: any) => {
                    if (err) {
                        return next(new Error("invalid token"));
                    }

                    socket.email = decoded.email;
                    socket.name = decoded.name;
                }
            )
            next();
        });

        interface Users {
            [email: string]: Socket;
        }

        const users: Users = {};

        this.io.on("connect", (socket: any) => {
            users[socket.email] = socket;

            socket.on("message", (msg: string) => {
                const m: ChatsInterface = JSON.parse(msg);

                // save message to database
                Chats.create(m);

                // send message to receiver
                if (users[m.receiver]) {
                    users[m.receiver].emit("message", msg);
                }
            });

            socket.on("disconnect", () => {
                console.log("Client disconnected");
            });
        });
    }
}
