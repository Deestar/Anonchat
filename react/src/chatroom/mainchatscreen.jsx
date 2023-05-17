import { MobileChatroom } from "./Mobile/chatroom";
//We are to import react-responsive when i'm ready to build the desktop page
// ~ for now we return only mobile
export const MainChatRoom = ({ room }) => {
  return <MobileChatroom room={room} />;
};
