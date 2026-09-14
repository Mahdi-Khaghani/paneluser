import { FaExclamationTriangle, FaSyncAlt } from "react-icons/fa";

const ErrorComponent = ({reTry}) => {
  return (
    <div className="min-h-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 transition-all hover:shadow-blue-100">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-red-100 dark:bg-red-900/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative bg-red-50 dark:bg-red-900/50 p-6 rounded-full">
            <FaExclamationTriangle className="text-red-500 text-5xl" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            خطا در دریافت اطلاعات
          </h2>
        </div>
        <div className="pt-4">
          <button
            onClick={reTry}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-200 dark:shadow-none active:scale-95"
          >
            <FaSyncAlt className="animate-spin-slow" />
            <span>تلاش مجدد</span>
          </button>
        </div>
        <p className="text-xs text-gray-400">
          اگر مشکل حل نشد، اتصال اینترنت خود را بررسی کنید.
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
