import React from "react";

interface ItemListProps {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  totalPages: number;
}

const ItemList: React.FC<ItemListProps> = ({
  setPageNumber,
  pageNumber,
  totalPages,
}) => {
  const handlePreviousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };
  console.log(totalPages, pageNumber);
  const handleNextPage = () => {
    if (totalPages > pageNumber) {
      setPageNumber((prev) => prev + 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        onClick={handlePreviousPage}
        disabled={pageNumber === 1}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2">{pageNumber}</span>
      <button
        onClick={handleNextPage}
        // disabled={!hasMore}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export { ItemList };
