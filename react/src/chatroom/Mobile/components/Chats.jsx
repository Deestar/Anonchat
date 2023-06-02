import { useEffect, useRef } from "react";
export const Chats = ({
  ifreply,
  chat,
  reply,
  setreply,
  id,
  img,
  setimage,
}) => {
  //reference to the chats body
  const cont = useRef();
  //Refrence to the distance for the icons
  const w = useRef(null);
  //Function to get the chat and set reply true when icon clicked
  const getchat = ({ target }) => {
    //This gets the position of the main h3 as t depends on if parent has a reply element or not ~ -2 because its an array
    let position = target.parentElement.children.length - 2;
    const chattext = target.parentElement.children[position].textContent;
    setreply(chattext, true);
  };
  const getImage = (event) => {
    event.preventDefault();
    const { target } = event;
    console.log(target.getAttribute("src"));
    if (target.getAttribute("src") ?? null) {
      setimage(target.getAttribute("src"));
    }
  };
  //prettier-ignore
  return <div ref={cont} id={id} className="chats_body">
    { ifreply?
    <div>
        <div></div>
        <h5>{reply}</h5>
        </div>:
        null
        }
    { chat?
          <h3>{chat}</h3>
         :
          <img onClick={getImage} src={img}/>}
    {
    chat?
    <i  className="fa-solid fa-reply" onClick={getchat}></i>
    :
    null}
  </div>;
};
