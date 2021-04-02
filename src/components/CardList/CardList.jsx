import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import PaginationItem from "./CardListPaginationItem";
import PaginatedCard from "./PaginatedCard";
import LinkedCard from "./LinkedCard";

const CardList = ({
  itemsPerPage,
  dataList,
  search,
  pagination,
  apiKeyword,
  link,
}) => {
  const [filteredData, setFilteredData] = useState(dataList);
  const [page, setPage] = useState(0);

  const paginate = (itemList) => {
    const numberOfPages =
      itemList !== null && Math.ceil(itemList.length / itemsPerPage);
    const paginatedList = Array.from({ length: numberOfPages }, (_, idx) => {
      const start = idx * itemsPerPage;
      return itemList.slice(start, start + itemsPerPage);
    });

    return paginatedList;
  };
  
  const [paginatedList, setPaginatedList] = useState(paginate(dataList));

  useEffect(() => {
    if (search !== "") {
      setPage(0);
      const temp = dataList.filter(
        (el) =>
          el.strMeal.toLowerCase().includes(search.toLowerCase()) ||
          (el.strCategory &&
            el.strCategory.toLowerCase().includes(search.toLowerCase()))
      );
      setFilteredData(temp);
    }
  }, [search, dataList]);
  

 
  useEffect(() => {
    if (search === "") {
      setPaginatedList(paginate(dataList));
      /* eslint-disable */
    } else setPaginatedList(paginate(filteredData));
  }, [search, dataList, filteredData]);
 
  return (
    <>
      {pagination ? (
        <>
          <Row className="paginatedCard">
            {paginatedList &&
            paginatedList.length !== 0 &&
            paginatedList[page] ? (
              paginatedList[page].map((el, idx) => {
                return (
                  <PaginatedCard
                    el={el}
                    apiKeyword={apiKeyword}
                    key={idx}
                    link={link}
                  />
                );
              })
            ) : (
              <h2>Sorry we could not find this {apiKeyword}</h2>
            )}
          </Row>
          <Row className="pagination">
            <PaginationItem
              paginatedList={paginatedList}
              page={page}
              setPage={setPage}
            />
          </Row>
        </>
      ) : (
        <>
          {dataList.map((el, idx) => {
            return (
              <LinkedCard
                el={el}
                apiKeyword={apiKeyword}
                key={idx}
                link={link}
              />
            );
          })}
        </>
      )}
    </>
  );
};

CardList.defaultProps = {
  search: "",
};

export default CardList;
