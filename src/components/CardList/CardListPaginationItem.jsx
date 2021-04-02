import React from "react";
import { Pagination } from "react-bootstrap";

const CardListPaginationItem = ({ paginatedList, page, setPage }) => {
  return (
    <>
      {paginatedList.length > 1 ? (
        <Pagination>
          {paginatedList &&
            paginatedList.map((val, idx) => {
              return (
                <Pagination.Item
                  key={idx}
                  active={idx === page}
                  onClick={() => setPage(idx)}
                >
                  {idx + 1}
                </Pagination.Item>
              );
            })}
        </Pagination>
      ) : (
        <></>
      )}
    </>
  );
};

export default CardListPaginationItem;
