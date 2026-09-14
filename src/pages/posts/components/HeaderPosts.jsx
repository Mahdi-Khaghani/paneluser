import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import PostContext from "../context/CreatContext";

const HeaderPosts = () => {
  const { handleSearch } = useContext(PostContext);
  return (
    <div
      className="
        mt-5 flex w-full items-center justify-between
        rounded-2xl border border-gray-200
        bg-white px-5 py-4 shadow-sm
        transition-all duration-300

        dark:border-gray-700 dark:bg-gray-900
      "
    >
      <div
        className="
          flex w-full max-w-md items-center gap-3
          rounded-xl border border-gray-200
          bg-gray-50 px-3 py-1.5
          transition-all duration-300

          focus-within:border-blue-400
          focus-within:bg-white
          focus-within:ring-4
          focus-within:ring-blue-100

          dark:border-gray-700
          dark:bg-gray-800
          dark:focus-within:border-blue-500
          dark:focus-within:bg-gray-800
          dark:focus-within:ring-blue-950
        "
      >
        <FaSearch
          className="
            text-lg text-gray-400
            transition-colors duration-200
            dark:text-gray-500
          "
        />

        <input
          type="text"
          onChange={(e) => handleSearch(e)}
          className="
            w-full bg-transparent
            px-2 py-2
            text-sm font-medium
            text-gray-700
            outline-none
            placeholder:text-gray-400

            dark:text-gray-200
            dark:placeholder:text-gray-500
          "
          placeholder="جستجوی پست‌ها..."
        />
      </div>
    </div>
  );
};

export default HeaderPosts;
