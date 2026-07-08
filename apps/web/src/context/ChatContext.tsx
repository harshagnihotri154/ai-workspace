import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface ChatContextType {
  selectedChatId: string | null;
  setSelectedChatId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

const ChatContext = createContext<
  ChatContextType | undefined
>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({
  children,
}: ChatProviderProps) {
  const [selectedChatId, setSelectedChatId] =
    useState<string | null>(null);

  return (
    <ChatContext.Provider
      value={{
        selectedChatId,
        setSelectedChatId,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error(
      "useChatContext must be used inside ChatProvider"
    );
  }

  return context;
}