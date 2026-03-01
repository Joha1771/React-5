import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  setPage,
}) => {
  // Генерируем массив номеров страниц
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, currentPage + 2);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="flex -space-x-px text-sm">
        {/* Кнопка "Назад" */}
        <li>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="box-border flex items-center justify-center w-10 h-10 text-sm font-medium border text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading rounded-s-base focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-4 h-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
        </li>

        {/* Номера страниц */}
        {getPageNumbers().map((pageNum) => (
          <li key={pageNum}>
            <button
              onClick={() => setPage(pageNum)}
              className={`box-border flex items-center justify-center w-10 h-10 text-sm font-medium border focus:outline-none ${
                pageNum === currentPage
                  ? "text-blue-600 bg-blue-50 border-blue-300 font-bold"
                  : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
              }`}
            >
              {pageNum}
            </button>
          </li>
        ))}

        {/* Кнопка "Вперёд" */}
        <li>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="box-border flex items-center justify-center w-10 h-10 text-sm font-medium border text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading rounded-e-base focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-4 h-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
