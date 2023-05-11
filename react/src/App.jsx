import { useCallback, useState } from "react";
import { Introscreen } from "./Intro/mainscreen";
import { Appcontext } from "./setappcontext";
export const App = () => {
  //state for which view to be returned
  const [getapptype, setGetAppType] = useState({
    intro: true,
    chatroom: false,
  });
  const setapptype = useCallback(
    (type) =>
      setGetAppType(() => ({
        intro: false,
        chatroom: false,
        [type]: true,
      })),
    []
  );
  return (
    <Appcontext.Provider value={setapptype}>
      {getapptype.intro ? <Introscreen /> : <h2>Chat room is set</h2>}
    </Appcontext.Provider>
  );
};
