import { Stage } from "./Stage";
import { Chat } from "./Chat";
import { Audience } from "./Audience";
import { Navbar, ChatMobile } from "../../Components";
import { useEffect, useState } from "react";
import { ChatRoomNavbar } from "../../pages/ChatRoom/ChatRoomNavbar";

import "./chat_room_desktop.css";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export const ChatRoomDesktop = ({
  messages,
  staged,
  audience,
  roomId,
  creatorId,
}) => {
  const isMobile = useMediaQuery("(max-width: 800px)");

  console.log({ isMobile });

  return (
    <>
      {isMobile ? (
        <>
        <ChatRoomNavbar />
        <ChatMobile messages={messages} roomId={roomId} />
        </>
      ) : (
        <>
          <Navbar />
          <div className="chat_room_desktop_main">
            <Stage staged={staged} roomId={roomId} creatorId={creatorId} />
            <Chat messages={messages} roomId={roomId} />
            <Audience
              audience={audience}
              roomId={roomId}
              creatorId={creatorId}
            />
          </div>
        </>
      )}
    </>
  );
};
