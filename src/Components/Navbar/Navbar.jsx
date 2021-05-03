import "./navbar.css";
import { Brand } from "./brand";
import { NotificationIcon } from "..";
export const Navbar = () => {
  return (
    <div className="navbar fixed top-0 w-full shadow flex flex-row justify-between items-center px-2 bg-gray-300 z-20">
      <Brand />
      <NotificationIcon />
    </div>
  );
};
