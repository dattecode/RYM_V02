import React, { useEffect, useState } from "react";
import pagesInLocation from "../utils/paginationResidents";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";
import "../styles/mainCss.css";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { residentInPage, pages } = pagesInLocation(residents, currentPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1)
  }, [residents])

  return (
    <article className="cardPositions">
      <section className="containerCards">
        {residentInPage.map((resident) => (
          <ResidentCard resident={resident} key={resident} />
        ))}
      </section>
      <section className="containerPag">
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    </article>
  );
};

export default ResidentList;
