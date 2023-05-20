import { Chats } from "./Chats";
import { Fetcher } from "../../../Intro/mobile/components/fetcher";
export const Chatbody = ({ setreply }) => {
  return (
    <section className="chatbody">
      <Chats setreply={setreply} />
    </section>
  );
};
