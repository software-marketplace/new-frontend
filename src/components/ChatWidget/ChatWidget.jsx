import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

import {
    MainContainer,
    ChatContainer,
    ConversationHeader,
    MessageList,
    Message,
    MessageInput,
    ConversationList,
    Conversation,
    Avatar,
    Search,
    Sidebar,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { baseUrl } from '../../config';
import { Close } from '@mui/icons-material';

function ChatWidget({isOpen, setIsOpen, email}) {
    const [messageInputValue, setMessageInputValue] = useState("");
    const [conversations, setConversations] = useState([]);
    const [focusedConversation, setFocusedConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        if (conversations.length === 0) fetchConversations();

        if (socket === null) {
            const socket = io("http://localhost:8000", {
                auth: {
                    token: localStorage.getItem("access_token"),
                },
            });

            socket.on("connect", () => {
                setSocket(socket);
                console.log("connected");
            });

            socket.onAny((event, ...args) => {
                console.log(event, args);
            })

            socket.on("message", (data) => {
                console.log('socket on message')
                //console.log(data);
                //const message = JSON.parse(data);
                //if (message.sender === localStorage.getItem("email")) return;
                //const newMessage = {
                    //id: messages.length,
                    //sender: message.sender,
                    //message: message.message,
                    //timestamp: message.timestamp,
                //};
                //setMessages([newMessage, ...messages]);
                fetchMessages()
            });

        }

        console.log('socket useEffect');

    }, []);

    useEffect(() => {
        let prevConvo = false;
        for (let convo of conversations) {
            if (convo.name === email) {
                setFocusedConversation(convo.id);
                fetchMessages(convo.id);
                prevConvo = true;
                break;
            }
        }

        if (prevConvo) return;
        setConversations([...conversations, {
                    id: conversations.length,
                    name: email,
                    info: "",
                    lastSenderName: "",
                    messages: [],
                    onClick: function() {
                        sendMessage();
                        setFocusedConversation(conversations.length);
                    },

                    // dummy
                    avatarUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    status: "available",
                    active: true,
                    unreadDot: true,
        }]);
        console.log('email useEffect');
    }, [email]);

    const sendMessage = () => {
        if (focusedConversation === null || focusedConversation === undefined) return;
        console.log('sendMessage');
        socket.emit("message", JSON.stringify({
            sender: localStorage.getItem("email"),
            receiver: conversations[focusedConversation].name,
            message: messageInputValue,
            timestamp: new Date().getTime(),
        }));

        const newMessage = {
            id: messages.length,
            sender: localStorage.getItem("email"),
            message: messageInputValue,
            sentTime: new Date(),
            direction: "outgoing",
        }
        setMessages([newMessage, ...messages]);
        setMessageInputValue("")
    }


    const fetchMessages = async ({ conversationWith }) => {
        const response = await fetch(`${baseUrl}/chats/${conversationWith} `, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access_token")} `,
                Accept: "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            const messages = data.map((message, index) => {
                return {
                    id: index,
                    sender: message.sender,
                    message: message.message,
                    sentTime: new Date(message.timestamp),
                    direction: message.sender === localStorage.getItem("email") ? "outgoing" : "incoming",
                }
            });

            setMessages(messages);
        } else {
            console.log("error");
            console.log(response.status);
        }
    }

    const fetchConversations = async () => {
        const response = await fetch(`${baseUrl}/chats`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                Accept: "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            const conversations = data.map((conversation, index) => {
                return {
                    id: index,
                    name: conversation.with,
                    info: conversation.message,
                    lastSenderName: conversation.lastSender,
                    messages: [],
                    onClick: function() {
                        if (conversations[index].messages.length > 0) return;
                        fetchMessages({ conversationWith: conversation.with });
                        setFocusedConversation(index);
                    },

                    // dummy
                    avatarUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    status: "available",
                    active: true,
                    unreadDot: true,
                }
            });
            setConversations(conversations);
        } else {
            console.log("error");
            console.log(response.status);
        }
    }


    const renderConversationHeader = () => {
        const CloseButton = <Close onClick={() => setIsOpen(false)} style={{ cursor: "pointer" }}/>;
        if (focusedConversation === null || focusedConversation === undefined) return (
            <ConversationHeader>
                <ConversationHeader.Actions>
                    {CloseButton}
                </ConversationHeader.Actions>
            </ConversationHeader>
        );

        console.log('renderConversationHeader');
        console.log(conversations, focusedConversation);
        const { name, avatarUrl, } = conversations[focusedConversation];
        return (
            <ConversationHeader>
                <ConversationHeader.Back />
                <Avatar src={avatarUrl} name={name} />
                <ConversationHeader.Content userName={name} info="Active 10 mins ago" />
                <ConversationHeader.Actions>
            {CloseButton}
                </ConversationHeader.Actions>
            </ConversationHeader>
        )
    }

    const renderMessages = () => {
        if (focusedConversation === null || focusedConversation === undefined) return <></>;
        const reversedMessages = [];
        for(let i=messages.length-1; i>=0; i--) {
            reversedMessages.push(messages[i]);
        }

        return <MessageList>
            {reversedMessages.map((message) => {
                return <Message model={{
                    message: message.message,
                    sentTime: "15 mins ago",
                    sender: message.sender,
                    direction: message.direction,
                    position: "single"
                }}>
                    <Avatar src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} name={message.sender} />
                </Message>
            })}
        </MessageList>
    }

    return <div style={{
        height: "600px",
        position: "fixed",
        bottom: "0",
        right: "0",
        zIndex: "1000",
    }}>
        {!isOpen && <button onClick={() => setIsOpen(true)}>Open</button>}
        <MainContainer responsive style={{ display: isOpen ? "" : 'none' }}>
            <Sidebar position="left" scrollable={false}>
                <Search placeholder="Search..." />
                <ConversationList>
                    {conversations.map((conversation) => {
                        return (
                            <Conversation
                                key={conversation.id}
                                name={conversation.name}
                                lastSenderName={conversation.lastSenderName}
                                info={conversation.info}
                                unreadDot={conversation.unreadDot}
                                onClick={conversation.onClick}
                            >
                                <Avatar
                                    src={conversation.avatarUrl}
                                    name={conversation.name}
                                    status={conversation.status}
                                    active={conversation.active}
                                />
                            </Conversation>
                        )
                    })}
                </ConversationList>
            </Sidebar>
            <ChatContainer>
                {renderConversationHeader()}
                {renderMessages()}

                <MessageInput
                    placeholder="Type message here"
                    value={messageInputValue}
                    attachButton={false}
                    onChange={val => setMessageInputValue(val)}
                    onSend={() => sendMessage()}
                />
            </ChatContainer>

        </MainContainer>
    </div>;
}

export default ChatWidget;
