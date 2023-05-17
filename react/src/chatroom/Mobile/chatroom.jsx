import { Header } from "./components/Header";
import { Chatbody } from "./components/Chatbody";
import { Footer } from "./components/Footer";
import "../../assets/css/mobilechat.css";
export const MobileChatroom = ({ room }) => {
  return (
    <main className="mobilechat">
      <Header />
      <Chatbody />
      <Footer />
    </main>
  );
};