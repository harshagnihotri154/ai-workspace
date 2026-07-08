// import SidebarHeader from "./SidebarHeader";

import SidebarChatList from "./SidebarChatList";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import SidebarUsage from "./SidebarUsage";

// import SidebarHeader from "./SidebarHeader";
export default function Sidebar() {
  return (
    <aside className="hidden w-80 shrink-0 flex-col border-r border-white/5 bg-[#08080A] lg:flex">

      <SidebarHeader  />

      <SidebarSearch />

      <SidebarChatList />

      <SidebarUsage />

      <SidebarFooter />

    </aside>
  );
}