import { useQuery } from "@tanstack/react-query";

import { getChats } from "../../services/chat-history.service";
import { useChatContext } from "../../context/ChatContext";

import SidebarItem from "./SidebarItem";

export default function SidebarChatList() {
  const {
    selectedChatId,
    setSelectedChatId,
  } = useChatContext();

  const {
    data: chats = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chats"],
    queryFn: getChats,
  });

  if (isLoading) {
    return (
      <div className="flex-1 p-5 text-zinc-500">
        Loading conversations...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 p-5 text-red-500">
        Failed to load conversations.
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-4">
      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
        Conversations
      </p>

      <div className="space-y-1">
        {chats.map((chat) => (
          <SidebarItem
            key={chat._id}
            chat={chat}
            active={
              chat._id === selectedChatId
            }
            onClick={() =>
              setSelectedChatId(chat._id)
            }
          />
        ))}
      </div>
    </div>
  );
}