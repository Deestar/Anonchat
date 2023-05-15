import { useCallback, useState } from "react";
import "../../assets/css/mobileindex.css";
import { Header } from "./components/Header";
import { Introtext } from "./components/Introtext";
import { Choicecard } from "./components/Choicecard";
import { Createform } from "./components/createform";
import Group from "../../assets/img/group.png";
import { Joinform } from "./components/joinform";
import { Share } from "./components/Share";
export const MobileIndex = () => {
  //State to detemine what component to render next
  const [progress, setProgress] = useState({
    choice: false,
    create: false,
    room: false,
    share: true,
  });
  //State to get the roomid and name for share component after user creates room
  const [roominfo, setRoomInfo] = useState({ name: "", roomid: "" });
  //function to set room id and switch to share page
  const setShare = useCallback((id, name) => {
    setRoomInfo({ name: name, roomid: id });
    setProgress(() => ({
      choice: false,
      create: false,
      room: false,
      share: true,
    }));
  }, []);
  //function to return right template column for main element
  const columndiv = () => {
    if (progress.choice || progress.room || progress.share) {
      return {
        gridTemplateRows: "10% 16% 50% 15%",
      };
    } else {
      return {
        gridTemplateRows: "10% 16% 1fr",
      };
    }
  };
  //function to change progress state
  const getProgress = useCallback((progress) => {
    setProgress(() => ({
      choice: false,
      create: false,
      room: false,
      share: false,
      [progress]: true,
    }));
  }, []);
  return (
    // prettier-ignore
    <main className="mobileindex_main" style={columndiv()}>
      <Header />
      <Introtext />
     {
     progress.choice?
     <>
      <Choicecard next={getProgress}/>
      <img src={Group} />
      </>
      :
      progress.create?
      <Createform next={setShare} prev={getProgress} />
      :
      progress.room?<>
      <Joinform prev={getProgress}/>
      <img style={{height:"100%"}} src={Group} />
      </>
      :
      progress.share?<><Share next={getProgress} roomid={roominfo.roomid} roomname={roominfo.name}/> <img style={{height:"100%"}} src={Group} /></>
      :
      <>
      <Choicecard next={getProgress}/>
      <img src={Group} />
      </>
      }
    </main>
  );
};
