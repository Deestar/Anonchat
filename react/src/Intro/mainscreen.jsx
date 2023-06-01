//We are to import react-responsive when i'm ready to build the desktop page
// ~ for now we return only mobile
import { useMediaQuery } from "react-responsive";
import { MobileIndex } from "./mobile/Index";
export const Introscreen = () => {
  const isMobile = useMediaQuery({ maxWidth: 720 });
  return isMobile ? (
    <MobileIndex />
  ) : (
    <h3>
      Large screen view is unavailable Kindly switch to your mobile device or
      screen please
    </h3>
  );
};
