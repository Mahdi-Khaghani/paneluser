import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import UserContext from "../context/CreatContext";

const AddUserPage = () => {
  const { handleAddUser, state } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    console.log(state.data)
    e.preventDefault();
    const newUser = {
      ...formData,
      id:
        state.data.length > 0
          ? Math.max(...state.data.map((u) => u.id)) + 1
          : 1,
    };
    console.log("Form submitted:", formData);
    handleAddUser(newUser);
    alert("User added successfully!");
    navigate(-1)
    setFormData(formData);
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">
        افرودن کاربر
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <div className="mb-3">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            نام
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="نام خود را وارد کنید
                    "
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            نام کاربری
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="نام کاربری خود را وارد کنید"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            ایمیل
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ایمیل خود را وارد کنید"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            شماره موبایل
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="شماره موبایل خود را وارد کنید"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="website"
            id="website"
            className="block text-gray-700 font-medium mb-2"
          >
            وبسایت
          </label>
          <input
            type="url"
            name="website"
            id="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="وبسایت خود را وارد کنید"
          />
        </div>

        <div className="flex justify-center gap-20">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md"
          >
            ثبت
          </button>
          <Link
            to={"/users"}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md"
          >
            خروج
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddUserPage;
