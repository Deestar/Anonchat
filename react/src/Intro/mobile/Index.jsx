import { useCallback, useState } from "react";
import "../../assets/css/mobileindex.css";
import { Header } from "./components/Header";
import { Introtext } from "./components/Introtext";
import { Choicecard } from "./components/Choicecard";
import { Createform } from "./components/createform";
import Group from "../../assets/img/group.png";
import { Joinform } from "./components/joinform";
export const MobileIndex = () => {
  //State to detemine what component to render next
  const [progress, setProgress] = useState({
    choice: false,
    create: false,
    room: true,
    share: false,
  });
  //function to return right template column for main element
  const columndiv = () => {
    if (progress.choice || progress.room) {
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
      <Createform next={""} prev={getProgress} />
      :
      progress.room?<>
      <Joinform next={getProgress}/>
      <img style={{height:"100%"}} src={Group} />
      </>
      :
      progress.share?<div>share</div>
      :
      <>
      <Choicecard next={getProgress}/>
      <img src={Group} />
      </>
      }
    </main>
  );
};
