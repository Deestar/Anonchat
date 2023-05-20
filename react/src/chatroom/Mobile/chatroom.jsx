import { Header } from "./components/Header";
import { Chatbody } from "./components/Chatbody";
import { Footer } from "./components/Footer";
import "../../assets/css/mobilechat.css";
import { useCallback, useState } from "react";
export const MobileChatroom = ({ room }) => {
  //A state to know when user wants to reply
  const [ifreply, setIfreply] = useState({
    reply: false,
    replyto: "",
  });
  //Function to reply ~passed to chats component
  const getReply = useCallback((chat, boolval) => {
    setIfreply(() => ({ reply: boolval, replyto: chat }));
  }, []);
  return (
    <main className="mobilechat">
      <Header name={room.name} />
      <Chatbody setreply={getReply} />
      <Footer id={room.id} reply={ifreply} cancel={getReply} />
    </main>
  );
};
