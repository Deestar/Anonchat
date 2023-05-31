import { Chats } from "./Chats";
import { Fetcher } from "../../../Intro/mobile/components/fetcher";
import { LoadChat } from "./ChatLoader";
import { useEffect, useState } from "react";
export const Chatbody = ({ setreply, id, f }) => {
  //State to collect chats
  const [chat, setChat] = useState([]);
  //State for the Chatloader
  const [loader, setLoader] = useState(false);
  //Function to get chats for rooms
  useEffect(() => {
    setLoader(true);
    //use this for production
    // http://funanonchat.atwebpages.com/laravel/public
    const send = Fetcher(
      `http://localhost/projects/anonchat/laravel/public/api/${id}`,
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
      setLoader(false);
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
      style={{ justifyContent: loader ? "center" : "flex-start" }}
    >
      {loader ? <LoadChat /> : Allchat}
    </section>
  );
};
