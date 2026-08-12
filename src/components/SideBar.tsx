import LogoIcon from "../icons/LogoIcon";
import {
  DocsIcon,
  HashTagIcon,
  XIcon,
  YouTubeIcon,
} from "../icons/SideBarIcons";
import SidebarItem from "./SidebarItem";

function SideBar() {
    const menuItems = [
      {
        text: "Twitter",
        iconDesktop: <XIcon size="sm" />,
        iconMobile: <XIcon size="md" />,
      },
      {
        text: "Youtube",
        iconDesktop: <YouTubeIcon size="sm" />,
        iconMobile: <YouTubeIcon size="md" />,
      },
      {
        text: "Documents",
        iconDesktop: <DocsIcon size="md" />,
        iconMobile: <DocsIcon size="md" />,
      },
      {
        text: "Tags",
        iconDesktop: <HashTagIcon size="md" />,
        iconMobile: <HashTagIcon size="md" />,
      },
    ];
  return (
    <div>
      <div className="w-12 md:w-72 min-h-screen bg-white border-r-2 border-r-slate-300 flex flex-col transition-all duration-300 ease-in-out sticky top-0 left-0 ">
        <div className="flex items-center my-2 ml-2 md:m-4 py-2 gap-2 scale-120 md:scale-100 text-purple-600">
          <LogoIcon size="xl" />
          <h2 className="hidden md:block text-2xl font-sans font-bold tracking-tight whitespace-nowrap transition-opacity duration-300">
            Fetch Later
          </h2>
        </div>
        <div className="p-3 space-y-1 text-black flex-1 flex flex-col items-center md:items-stretch w-full">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-center md:justify-start"
            >
              {/* Desktop View: Passes the full text and smaller icon variant */}
              <div className="hidden md:block w-full">
                <SidebarItem text={item.text} icons={item.iconDesktop} />
              </div>

              {/* Mobile/Compact View: Hides text completely and renders icon centered */}
              <div className="block md:hidden ">
                <SidebarItem icons={item.iconMobile} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
