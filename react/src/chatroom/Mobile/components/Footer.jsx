import { useRef, useState } from "react";
import { Fetcher } from "../../../Intro/mobile/components/fetcher";
export const Footer = ({ reply, cancel, id }) => {
  const foot = useRef(null);
  const tarea = useRef(null);
  const fileInput = useRef(null);
  //current file name
  const [fname, setFname] = useState("");
  //State to either show camera or send arrow
  const [send, setSend] = useState(false);
  //state to show textarea
  const [textset, setTextSet] = useState(true);
  //Input states
  const [chat, setChat] = useState({
    text: "",
  });
  //Function to blur textarea
  const blurInput = () => {
    if (tarea.current) {
      tarea.current.blur();
    }
  };
  //Function to blur textarea and maintain a height in 'px'
  const staticheight = () => {
    let h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    let r = document.querySelector(":root");
    r.style.setProperty("--height", h + "px");
    document.body.addEventListener("touchstart", blurInput);
  };
  //Function to set height back to responsive
  const resheight = () => {
    let r = document.querySelector(":root");
    r.style.setProperty("--height", "-webkit-fill-available");
    document.removeEventListener("touchstart", blurInput);
  };
  //Function increase height based on text height
  const incrTextHeight = (e) => {
    let textarea = e.target;
    textarea.style.height = "5.5vh";
    const textHeight = textarea.scrollHeight;
    textarea.style.height = textHeight + "px";
  };
  //Function to set the send button when user chooses an image and remove the texarea from view
  const setImage = (event) => {
    const { name, type } = event.target.files[0];
    if (event.target && type.startsWith("image/")) {
      setFname(name);
      setSend(true);
      setTextSet(false);
    } else {
      setFname("");
      setSend(false);
      setTextSet(true);
    }
  };
  //Function to reset file input and set the textarea
  const resetInput = () => {
    setSend(false);
    setTextSet(true);
    fileInput.current.value = "";
  };
  //Function to send inputs when user clicks send button
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    textset
      ? form.append("chats", chat)
      : form.append("img", fileInput.current.files[0]);
    form.append("ifreply", reply.reply ? 1 : 0);
    form.append("room_id", id);
    reply.reply ? form.append("reply", reply.replyto) : null;
    const send = Fetcher("http://127.0.0.1:8000/api/chat", "post", form);
    send.then((res) => {
      console.log(res);
    });
  };
  //Function to remove selected reply
  const rmvReply = () => {
    cancel(() => ({ reply: false, replyto: "" }));
  };
  // prettier-ignore
  return (
    <footer ref={foot} onSubmit={handleSubmit}>
     {reply.reply?<div className="replying">
        <div></div>
        <h5><span>Replying to </span>{reply.replyto}</h5>
        <i onClick={rmvReply} className="fa-solid fa-xmark"></i>
      </div>:null}
      <form>
    {textset?<textarea
        onKeyUp={(e)=>e.target.value.length > 0?setSend(true):setSend(false)}
          ref={tarea}
          onFocus={staticheight}
          onInput={(event)=>{
            incrTextHeight(event);
            //manage text area input
           setChat(event.target.value);
          }}
          onBlur={resheight}
          placeholder="Type here"
        >
        </textarea>
        :
        <>
        <i className="fa-solid fa-xmark" onClick={resetInput}></i>
        <h3>{fname}</h3>
        </>
        }
        <label>
          <input type="file" ref={fileInput} onChange={setImage}/>
          <i className="fa-solid fa-camera-retro"></i>
        </label>
        {send?<button>
          <i className="fa-regular fa-paper-plane"></i>
        </button>:null}
      </form>
    </footer>
  );
};
