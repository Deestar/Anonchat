import { useRef, useState } from "react";
import { Fetcher } from "./fetcher";
import Back from "../../../assets/img/back.png";
export const Createform = ({ prev }) => {
  //inputs state
  const [newroom, setNewRoom] = useState({
    name: "",
    banned: null,
    logo: null,
  });
  //error states
  const [error, setError] = useState({
    name: null,
    banned: null,
    logo: null,
  });
  //function to get input values
  const getNewRoom = (event) => {
    const { value, name } = event.target;
    setNewRoom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //A refrence to the image since state dont hold file
  const logo = useRef(null);
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
  //when create button is clicked function onclick to create room
  const submitRoom = (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("name", newroom.name);
    form.append("banned", newroom.banned);
    if (logo.current.files.length > 0) {
      form.append("logo", logo.current.files[0]);
    }
    const send = Fetcher("http://127.0.0.1:8000/api/", "post", form);
    send.then((response) => {
      if (response.error) {
        console.log(response);
        setError(response);
      } else {
        setError({ name: null, banned: null, logo: null });
        console.log(response);
      }
    });
  };

  return (
    <form action="" onSubmit={submitRoom}>
      <img
        onClick={() => {
          prev("choice");
        }}
        src={Back}
      />
      <h1>Create Your Room</h1>
      <section>
        <label>
          <h3>Room Name</h3>
          <input
            onFocus={blurout}
            onBlur={stoptouch}
            name="name"
            type="text"
            maxLength={25}
            onInput={getNewRoom}
          />
          {error.name ? <h6>{error.name}</h6> : null}
        </label>
        <label>
          <h3> Banned Words</h3>
          <input
            onFocus={blurout}
            onBlur={stoptouch}
            type="text"
            name="banned"
            placeholder="bitch, hoe, racist"
            onInput={getNewRoom}
          />
          {error.banned ? <h6>{error.banned}</h6> : null}
        </label>
        <label>
          <h3>Room Logo</h3>
          <input ref={logo} type="file" />
          {error.logo ? <h6>{error.logo}</h6> : null}
        </label>
      </section>
      <button type="submit">Create</button>
    </form>
  );
};
