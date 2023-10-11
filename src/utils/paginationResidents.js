const pagesInLocation = (residents, currentPage) => {
  const RESIDENT_PER_PAGE = 20;

  const sliceStart = (currentPage -1) * RESIDENT_PER_PAGE
  const sliceEnd = sliceStart + RESIDENT_PER_PAGE
  const residentInPage = residents.slice(sliceStart, sliceEnd)

  const totalPage = Math.ceil(residents.length / RESIDENT_PER_PAGE);
  const pages = [];

  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }
  return {
    residentInPage,
    pages,
  };
};

export default pagesInLocation;
