const PaginationButton = ({ page, setCurrentPage, currentPage }) => {
  return (
    <button
      key={page}
      onClick={() => setCurrentPage(page)}
      className={`px-3 py-2 rounded-lg transition mb-5 cursor-pointer ${
        currentPage === page
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
        {page}
    </button>
  );
};

export default PaginationButton;
