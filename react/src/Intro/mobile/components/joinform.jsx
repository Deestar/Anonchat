import { useState } from "react";
import Back from "../../../assets/img/back.png";
import { Fetcher } from "./fetcher";
//Added inline styling to get a quick fit to one input
export const Joinform = ({ prev }) => {
  //State to get id
  const [id, setId] = useState("");
  const style = {
    fontSize: "clamp(16px, 5.7vw, 20px)",
    color: "rgb(209, 209, 209)",
    textAlign: "center",
    marginBottom: "2%",
    fontFamily: "cursive",
  };
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
  //function to join a room
  const joinroom = (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("room_id", id);
    const send = Fetcher("http://127.0.0.1:8000/api/room", "post", form);
    send.then((response) => {
      console.log(response);
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
          {/* <h6>An error message for input values</h6> */}
        </label>
      </section>
      <h3 style={style}>Request for your Room Id from room owner</h3>
      <button>Join Room</button>
    </form>
  );
};
