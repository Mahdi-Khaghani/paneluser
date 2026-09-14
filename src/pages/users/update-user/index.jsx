import { useContext, useState } from "react";
import UserContext from "../context/CreatContext";

const EditUserModal = ({ user, setSelectedUser}) => {
  const {handleUpdateUser,} = useContext(UserContext)
  const [name, setName] = useState(user.name);
  const [userName, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const updatedUser = {
    id : user.id,
    name : name,
    username : userName,
    email : email,
    phone : phone,
    website : website
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
   handleUpdateUser(user.id,updatedUser)
    setSelectedUser(null)
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              ویرایش اطلاعات کاربر
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              اطلاعات کاربر را ویرایش و ذخیره کنید
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <form className="space-y-5" onSubmit={handleFormSubmit}>
            {/* Name & Username */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  نام
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="نام کاربر"
                  className="w-full rounded-xl border border-gray-300
                             bg-gray-50 px-4 py-3 text-sm text-gray-800
                             outline-none transition
                             placeholder:text-gray-400
                             focus:border-blue-500 focus:ring-4
                             focus:ring-blue-500/10
                             dark:border-gray-700 dark:bg-gray-800
                             dark:text-white dark:placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  نام کاربری
                </label>

                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="نام کاربری"
                  className="w-full rounded-xl border border-gray-300
                             bg-gray-50 px-4 py-3 text-sm text-gray-800
                             outline-none transition
                             placeholder:text-gray-400
                             focus:border-blue-500 focus:ring-4
                             focus:ring-blue-500/10
                             dark:border-gray-700 dark:bg-gray-800
                             dark:text-white dark:placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                ایمیل
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placehoّlder="example@email.com"
                className="w-full rounded-xl border border-gray-300
                           bg-gray-50 px-4 py-3 text-sm text-gray-800
                           outline-none transition
                           placeholder:text-gray-400
                           focus:border-blue-500 focus:ring-4
                           focus:ring-blue-500/10
                           dark:border-gray-700 dark:bg-gray-800
                           dark:text-white dark:placeholder:text-gray-500"
              />
            </div>

            {/* Phone & Website */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  شماره تلفن
                </label>

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="09123456789"
                  className="w-full rounded-xl border border-gray-300
                             bg-gray-50 px-4 py-3 text-sm text-gray-800
                             outline-none transition
                             placeholder:text-gray-400
                             focus:border-blue-500 focus:ring-4
                             focus:ring-blue-500/10
                             dark:border-gray-700 dark:bg-gray-800
                             dark:text-white dark:placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  وبسایت
                </label>

                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="example.com"
                  className="w-full rounded-xl border border-gray-300
                             bg-gray-50 px-4 py-3 text-sm text-gray-800
                             outline-none transition
                             placeholder:text-gray-400
                             focus:border-blue-500 focus:ring-4
                             focus:ring-blue-500/10
                             dark:border-gray-700 dark:bg-gray-800
                             dark:text-white dark:placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:justify-end dark:border-gray-700">
              <button
                onClick={() => setSelectedUser(null)}
                type="button"
                className="rounded-xl px-6 py-3 text-sm font-medium
                           text-gray-600 transition cursor-pointer
                           hover:bg-gray-100
                           dark:text-gray-300 dark:hover:bg-gray-800"
              >
                انصراف
              </button>

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-7 py-3 text-sm
                           font-semibold text-white shadow-lg
                           shadow-blue-500/20 transition
                           hover:bg-blue-700 hover:shadow-blue-500/30
                           active:scale-[0.98]"
              >
                ذخیره تغییرات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
