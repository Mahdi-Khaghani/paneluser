import { FaEdit, FaTrash } from "react-icons/fa";
import EditUserModal from "../update-user";
import { useContext, useState } from "react";
import UserContext from "../context/CreatContext";

const UsersTable = () => {
  const {state,handleDeleteUser} = useContext(UserContext)
  const [selectedUser, setSelectedUser] = useState(null);
    const confirmDelete = (id) => {
    if (window.confirm("آیا از حذف این کاربر اطمینان دارید؟")) {
      handleDeleteUser(id);
    }
  };
  return (
    <div className="flex justify-center items-center rounded-2xl">
      <table className="table-auto w-full text-center">
        <thead className="bg-blue-400 dark:bg-blue-900">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">نام</th>
            <th className="px-4 py-2">ایمیل</th>
            <th className="px-4 py-2">شماره تلفن</th>
            <th className="px-4 py-2">وبسایت</th>
            <th className="px-4 py-2">عملیات</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 dark:bg-gray-800">
          {state.data &&
            state.data.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2">{user.website}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="bg-transparent text-blue-500 px-4 py-2 rounded-md flex items-center gap-2"
                    onClick={() => {
                      setSelectedUser(user);
                    }}
                  >
                    <FaEdit className="cursor-pointer" />
                  </button>
                  <button
                    className="bg-transparent text-red-500 px-4 py-2 rounded-md flex items-center gap-2"
                    onClick={() => confirmDelete(user.id)}
                  >
                    <FaTrash className="cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {selectedUser && (
        <EditUserModal user={selectedUser} setSelectedUser={setSelectedUser}/>
      )}
    </div>
  );
};

export default UsersTable;
