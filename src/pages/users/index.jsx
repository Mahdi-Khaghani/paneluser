import { FaUserPlus } from "react-icons/fa";
import UsersTable from "./_components/UsersTable";
import { Link } from "react-router";
import { permissionHOC } from "../../permisionHOC/permisionHOC";
import UserContext from "./context/CreatContext";


const Users = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">کاربران</h1>
        <Link
          to={"/users/add"}
          className="bg-blue-400 text-white cursor-pointer px-4 py-2 rounded-md flex items-center gap-2"
        >
          <FaUserPlus />
          <span>افرودن کاربر</span>
        </Link>
      </div>

      <UsersTable/>
    </div>
  );
};

export default permissionHOC(Users,UserContext,"state","handleGetUsers") ;
