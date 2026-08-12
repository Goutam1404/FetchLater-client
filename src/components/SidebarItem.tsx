import type { ReactElement } from "react";

export interface SideBarProps {
  text?: String;
  icons: ReactElement;
}
function SidebarItem({ text, icons }: SideBarProps) {
  return (
    <div className="flex px-2 py-2 mb-5 items-center gap-4 transition-all duration-200 cursor-pointer text-slate-800 hover:bg-gray-200/75 rounded">
      {icons}{text && <span>{text}</span>}
    </div>
  );
}

export default SidebarItem;
