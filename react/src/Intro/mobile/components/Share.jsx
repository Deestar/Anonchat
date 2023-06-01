import { useRef, useState } from "react";

export const Share = ({ roomid, roomname, next }) => {
  //refrence for the input to be copied
  const clink = useRef();
  //state to show copy message
  const [iscopied, setIscopied] = useState("Click to copy");
  //function to copy the input value
  const copyLink = () => {
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      const range = document.createRange();
      clink.current.contentEditable = true;
      clink.current.readOnly = true;
      range.selectNodeContents(clink.current);
      const selected = window.getSelection();
      selected.removeAllRanges();
      selected.addRange(range);
      clink.current.setSelectionRange(0, 99999);
      clink.current.contentEditable = false;
      clink.current.readOnly = true;
    } else {
      clink.current.select();
    }
    document.execCommand("copy");
    clink.current.blur();
    setIscopied("RoomId Copied...");
    setTimeout(() => {
      setIscopied("Click to copy");
    }, 2000);
  };
  return (
    <section className="share">
      <header>
        <i
          onClick={() => next("choice")}
          className="fa-solid fa-arrow-left-long"
          style={{ color: "#256e3e" }}
        ></i>
        <h1>{roomname} Room Created</h1>
      </header>
      <h3>Share Your Anonymous Room ID</h3>
      <div className="buttons">
        {/* Replace dummy url with url of page */}
        <a
          href={`whatsapp://send?text=Join A room name ${roomname} Anonymous Chatroom http://funanonchat.atwebpages.com, with this id ${roomid}Test1212==`}
        >
          <i className="fa-brands fa-whatsapp" style={{ color: "#256e3e" }}></i>
          <h4>Whatsapp</h4>
        </a>
        {/* Replace this dummyurl with url of this page */}
        <a
          href={`https://t.me/share/url?url=${encodeURI(
            "http://funanonchat.atwebpages.com"
          )}&text=${encodeURI(
            "Join " +
              roomname +
              " Anonymous chatroom with this id," +
              roomid +
              " Test1212=="
          )}`}
        >
          <i className="fa-brands fa-telegram" style={{ color: "#256e3e" }}></i>
          <h4>Telegram</h4>
        </a>
      </div>
      <div className="link">
        <h3>{iscopied}</h3>
        <button onClick={copyLink}>
          <input defaultValue={roomid} ref={clink} />
          <i className="fa-solid fa-copy"></i>
        </button>
      </div>
    </section>
  );
};
