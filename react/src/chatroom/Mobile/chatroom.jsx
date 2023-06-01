import { Header } from "./components/Header";
import { Chatbody } from "./components/Chatbody";
import { Footer } from "./components/Footer";
import "../../assets/css/mobilechat.css";
import { useCallback, useState } from "react";
export const MobileChatroom = ({ room }) => {
  //State for error popup occurs
  const [popup, setPopup] = useState(null);
  //state for chat loader
  const [chatLoader, setChatLoader] = useState(false);
  //A state to know when user wants to reply
  const [ifreply, setIfreply] = useState({
    reply: false,
    replyto: "",
  });
  //state to rerun fetch with dependency
  const [refetch, setRefetch] = useState(false);
  //Function to reply ~ passed to chats component
  const getReply = useCallback((chat, boolval) => {
    setIfreply(() => ({ reply: boolval, replyto: chat }));
  }, []);
  //Function to rerun the fetch request with dependency
  const setFetch = useCallback(() => setRefetch((prev) => !prev), []);
  //Function to set popup
  const getPopup = useCallback((popmsg) => {
    setPopup(popmsg);
  }, []);
  //function to set chatLoader
  const setCLoader = useCallback((bool) => {
    setChatLoader(bool);
  }, []);
  return (
    <main className="mobilechat">
      {popup ? <h4 className="popup">{popup}</h4> : null}
      <Header img={room.logo} name={room.name} />
      <Chatbody
        f={refetch}
        id={room.id}
        setreply={getReply}
        cloader={chatLoader}
        lstate={setCLoader}
      />
      <Footer
        popup={getPopup}
        refetch={setFetch}
        id={room.id}
        lstate={setCLoader}
        reply={ifreply}
        cancel={getReply}
      />
    </main>
  );
};
