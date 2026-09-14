import Darkmode from "../../component/Darkmode";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="fixed right-0 top-0 h-screen w-64 shadow-lg z-50">
      <div className="flex flex-col justify-between h-full">
        {/* top content */}
        <div className="flex justify-between items-center h-16 shadow-md p-2 bg-blue-300 dark:bg-gray-900 rounded-t-lg">
          <div>
            <h1 className="text-white">پنل مدیریت</h1>
          </div>
          <div>
            <Darkmode/>
          </div>
        </div>
        {/* bottem content */}
        <div className="flex flex-col gap-4 flex-1 p-4 bg-blue-200 dark:bg-gray-900 rounded-b-lg">
          <ul className="text-black">
            <SidebarItem to={"/users"}>کاربران</SidebarItem>
            <SidebarItem to={"/posts"}>پست‌ها</SidebarItem>
            <SidebarItem to={"/comments"}>کامنت‌ها</SidebarItem>
            <SidebarItem to={"/tasks"}>تسک‌ها</SidebarItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
