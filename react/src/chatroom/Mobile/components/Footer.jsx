import { useRef } from "react";
export const Footer = () => {
  const foot = useRef(null);
  const tarea = useRef(null);
  const blurInput = () => {
    tarea.current.blur();
  };
  const staticheight = () => {
    let h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    let r = document.querySelector(":root");
    r.style.setProperty("--height", h + "px");
    document.body.addEventListener("touchstart", blurInput);
  };
  const resheight = () => {
    let r = document.querySelector(":root");
    r.style.setProperty("--height", "-webkit-fill-available");
    document.removeEventListener("touchstart", blurInput);
  };
  const incrTextHeight = (e) => {
    let textarea = e.target;
    textarea.style.height = "5.5vh";
    const textHeight = textarea.scrollHeight;
    textarea.style.height = textHeight + "px";
  };
  return (
    <footer ref={foot}>
      <form>
        <textarea
          ref={tarea}
          onFocus={staticheight}
          onInput={incrTextHeight}
          onBlur={resheight}
          placeholder="Type here"
        ></textarea>
        <label>
          <input type="file" />
          <i className="fa-solid fa-camera-retro"></i>
        </label>
        <button>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </form>
    </footer>
  );
};
