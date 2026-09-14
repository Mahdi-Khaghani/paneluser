const LoadingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-75 gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-100 dark:border-t-gray-700 animate-spin border-t-blue-500"></div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 font-medium animate-pulse">
        در حال دریافت اطلاعات...
      </p>
    </div>
  );
};

export default LoadingComponent;
