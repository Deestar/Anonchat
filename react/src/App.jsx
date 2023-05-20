import { useCallback, useState } from "react";
import { Introscreen } from "./Intro/mainscreen";
import { Appcontext } from "./setappcontext";
import { MainChatRoom } from "./chatroom/mainchatscreen";
export const App = () => {
  //state for which view to be returned
  const [getapptype, setGetAppType] = useState({
    intro: true,
    chatroom: false,
  });
  //state for the chatroom information
  const [chatroom, setChatroom] = useState({});
  //function to set intro or chatroom
  const setapptype = useCallback((type, roominfo) => {
    setChatroom(roominfo);
    setGetAppType(() => ({
      intro: false,
      chatroom: false,
      [type]: true,
    }));
  }, []);
  return (
    <Appcontext.Provider value={setapptype}>
      {getapptype.intro ? <Introscreen /> : <MainChatRoom room={chatroom} />}
    </Appcontext.Provider>
  );
};
