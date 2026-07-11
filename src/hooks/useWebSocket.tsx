import SockJS from "sockjs-client/dist/sockjs";
import { Client } from "@stomp/stompjs";
import { useTokenInfo } from "./useTokenInfo";

/**
 * @biref 웹소켓 연결 hook
 */

let client: Client | null = null;

export const useWebSocket = () => {
    const tokenInfo = useTokenInfo();

    const connect = (onConnected: () => void) => {

        const socket = new SockJS("http://localhost:8080/ws");
    
        client = new Client({
            webSocketFactory: () => socket,
            connectHeaders: {
                Authorization: `Bearer ${tokenInfo.accessToken}`,
            },
            
            reconnectDelay: 5000,
    
            onConnect: () => {
                onConnected();
            },
        });
    
        client.activate();
    };
    
    const disconnect = () => {
        client?.deactivate();
    };
    
    const getClient = () => client;

    return {
        connect,
        disconnect,
        getClient,
    }
}