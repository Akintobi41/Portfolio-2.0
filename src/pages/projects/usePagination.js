import { useState } from "react";

const usePagination = (items) => {

    const itemsPerPage = 2;
    const [exactPage, setExactPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (exactPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setExactPage(newPage);
        }
    };
    const handleNext = () => {
        handlePageChange(exactPage + 1);
    };
    const handlePrevious = () => {
        handlePageChange(exactPage - 1);
    };
    return { handleNext, handlePrevious, handlePageChange, currentItems, startIndex, endIndex, exactPage, totalPages }

}
export default usePagination