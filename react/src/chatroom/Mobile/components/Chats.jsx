export const Chats = ({ ifreply, chat, reply, setreply }) => {
  //Function to get the chat and set reply true when icon clicked
  const getchat = ({ target }) => {
    const chattext = target.parentElement.children[1].textContent;
    setreply(chattext, true);
  };
  //prettier-ignore
  return <div className="chats_body">
    { ifreply?
    <div>
        <div></div>
        <h5>{reply}</h5>
        </div>: null}
    { chat?
          <h3>{chat}</h3>
         :
          <img src={"../../../assets/img/chatbackground.jpg"}/>}
    { chat?
    <i className="fa-solid fa-reply" onClick={getchat}></i>
    :
    null}
  </div>;
};
