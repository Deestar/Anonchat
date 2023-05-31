import { useContext, useState } from "react";
import Back from "../../../assets/img/back.png";
import { Fetcher } from "./fetcher";
import { Loader } from "./Loader";
import { Appcontext } from "../../../setappcontext";
//Added inline styling to get a quick fit to one input
export const Joinform = ({ prev }) => {
  //Loader state
  const [loader, setLoader] = useState(false);
  //State to get id
  const [id, setId] = useState("");
  //style for h3 info
  const style = {
    fontSize: "clamp(16px, 5.7vw, 20px)",
    color: "rgb(209, 209, 209)",
    textAlign: "center",
    marginBottom: "2%",
    fontFamily: "cursive",
  };
  //State for error message
  const [error, setError] = useState(null);
  //getting the function to change to chatroom from context
  const setchatroom = useContext(Appcontext);
  //change height to absolute value on focus of input
  const blurout = () => {
    let h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    let r = document.querySelector(":root");
    r.style.setProperty("--height", h + "px");
  };
  //change height to responsive value on blur of input
  const stoptouch = () => {
    let r = document.querySelector(":root");
    r.style.setProperty("--height", "-webkit-fill-available");
  };
  //function to join a room with roomid
  const joinroom = (event) => {
    event.preventDefault();
    setLoader(true);
    const form = new FormData();
    form.append("room_id", id);
    //use this for production
    // http://funanonchat.atwebpages.com/laravel/public
    const send = Fetcher(
      "http://localhost/projects/anonchat/laravel/public/api/room",
      "post",
      form
    );
    send.then((response) => {
      if (response.error) {
        setError(response.message ?? response.room_id);
      } else {
        setError(null);
        setchatroom("chatroom", response);
      }
      setLoader(false);
    });
  };
  return (
    <form
      onSubmit={joinroom}
      action=""
      style={{ height: "clamp(250px,90%,370px)" }}
    >
      <img
        src={Back}
        onClick={() => {
          prev("choice");
        }}
        style={{ height: "clamp(30px,10%,40px)", top: "clamp(6px,2%,25px)" }}
      />
      <h1 style={{ fontSize: "clamp(20px, 6.5vw, 32px)", marginLeft: "2%" }}>
        Enter Your Room Id
      </h1>
      <section>
        <label>
          <h3
            style={{
              textAlign: "center",
              fontWeight: "800",
              letterSpacing: "2px ",
            }}
          >
            Room ID
          </h3>
          <input
            onFocus={blurout}
            onBlur={stoptouch}
            onInput={(event) => setId(event.target.value)}
            type="text"
            name="banned"
            placeholder="Roomid"
            style={{ paddingLeft: "15px", minHeight: "clamp(40px,5.5vh,50px)" }}
          />
          {error ? (
            <h6 style={{ textTransform: "capitalize" }}>{error}</h6>
          ) : null}
        </label>
      </section>
      <h3 style={style}>Request for your Room Id from room owner</h3>
      {loader ? <Loader /> : <button>Join Room</button>}
    </form>
  );
};
