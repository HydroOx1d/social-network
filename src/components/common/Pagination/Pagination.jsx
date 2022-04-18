import { useState } from "react";
import "./Pagination.css";

export const Pagination = ({ onSetActivePag, activePag, totalCount, count, portionSize = 10}) => {
  let totalPage = Math.ceil(totalCount / count);
  let pagesArr = [];
  for (let i = 1; i <= totalPage; i++) {
    pagesArr.push(i);
  }

  let portionCount = Math.ceil(totalPage / portionSize) 
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className="pagination">
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          Prev
        </button>
      )}
      {pagesArr
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              key={p}
              className={activePag === p ? "active" : null}
              onClick={() => onSetActivePag(p)}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          Next
        </button>
      )}
    </div>
  );
};
