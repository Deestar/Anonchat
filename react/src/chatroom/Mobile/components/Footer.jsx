import { useRef, useState } from "react";
export const Footer = () => {
  const foot = useRef(null);
  const tarea = useRef(null);
  const fileInput = useRef(null);
  //current file name
  const [fname, setFname] = useState("");
  //State to either show camera or send arrow
  const [send, setSend] = useState(false);
  //state to show textarea
  const [textset, setTextSet] = useState(true);
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
    console.log("blurred");
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
  //Function to set the send button when user chooses and remove the texarea from view
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
  //Function to send inputs when user clicks send
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // prettier-ignore
  return (
    <footer ref={foot} onSubmit={handleSubmit}>
      <form>
    {textset?    <textarea
        onKeyUp={(e)=>e.target.value.length > 0?setSend(true):setSend(false)}
          ref={tarea}
          onFocus={staticheight}
          onInput={(event)=>{
            incrTextHeight(event)

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
