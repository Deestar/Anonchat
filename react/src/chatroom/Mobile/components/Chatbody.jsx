import { Chats } from "./Chats";
import { Fetcher } from "../../../Intro/mobile/components/fetcher";
import { LoadChat } from "./ChatLoader";
import { useEffect, useState } from "react";
export const Chatbody = ({ setreply, id, f, cloader, lstate }) => {
  //State to collect chats
  const [chat, setChat] = useState([]);
  //state to show loader from this component only on first render
  const [frender, setFrender] = useState(true);
  //Function to get chats for rooms
  useEffect(() => {
    frender ? lstate(true) : null;
    setFrender(false);
    //use this for production
    // http://funanonchat.atwebpages.com/laravel/public
    const send = Fetcher(
      `http://funanonchat.atwebpages.com/laravel/public/api/${id}`,
      "get",
      null
    );
    send.then((res) => {
      if (res.error) {
        //There is an error
      }
      if (res.chats ?? []) {
        setChat(res.chats);
      }
      lstate(false);
    });
  }, [f]);
  // Mapping the chats to return an array of chat jsx
  const Allchat = chat.map(({ chats, id, ifreply, img, reply }) => (
    <Chats
      key={id}
      id={id}
      ifreply={ifreply}
      chat={chats}
      img={img}
      reply={reply}
      setreply={setreply}
    />
  ));

  return (
    <section
      className="chatbody"
      style={{ justifyContent: cloader ? "center" : "flex-start" }}
    >
      {cloader ? <LoadChat /> : Allchat}
    </section>
  );
};
