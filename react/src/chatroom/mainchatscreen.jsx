import { MobileChatroom } from "./Mobile/chatroom";
import { useMediaQuery } from "react-responsive";
//We are to import react-responsive when i'm ready to build the desktop page
// ~ for now we return only mobile
export const MainChatRoom = ({ room }) => {
  const isMobile = useMediaQuery({ maxWidth: 720 });
  return isMobile ? (
    <MobileChatroom room={room} />
  ) : (
    <h3>
      Large screen view is unavailable Kindly switch to your mobile device or
      screen please
    </h3>
  );
};
